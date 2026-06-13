import ContactForm from './ContactForm.jsx'
/* import EducationForm from './EducationalExperienceForm.jsx'
import PracticalExperienceForm from './PracticalExperienceForm.jsx' */
import ExperienceForm from './ExperienceForm.jsx'

export default function EditStep( { cv, setCV, setStep }) {

    function handleSubmit(e) {
		e.preventDefault();
		if (cv.contactInfo.email === cv.contactInfo.repeatEmail) {
			setStep('review');
		}
	}

	function updateItem(category, id, field, value) {
		setCV(prev => ({...prev, [category]: 
			prev[category].map(item =>
				item.id === id
					? { ...item, [field]: value }
					: item
			)
        }));
	}

    function updateContact(field, value) {
        setCV(prev => ({ ...prev, contactInfo: { ...prev.contactInfo, [field]: value } }))
    }

	function moveItem(category, fromIndex, toIndex) {
		setCV(prev => {
			const next = [...prev[category]];
			const [moved] = next.splice(fromIndex, 1);
			next.splice(toIndex, 0, moved);
			return {...prev, [category]: next};
		})
	}

	function removeItem(category, id) {
		setCV(prev => ({...prev, [category]: prev[category].filter( item => item.id !== id )}));
	}

    return (
        <form
            onSubmit={handleSubmit}
            className="cv-form"
        >
            <ContactForm
                cv={cv}
                onChange={updateContact}
            />
            <ExperienceForm
                cv={cv}
                headline="Education"
                category="education"
                buttonText="Add Education"
                updateItem={(id, field, value) => updateItem('education', id, field, value)}
                moveItem={(fromIndex, toIndex) => moveItem('education', fromIndex, toIndex)}
                onAdd={() => setCV(prev => ({...prev, education: [...prev.education, { id: crypto.randomUUID(), place: '', title: '', fromDate: '', toDate: '' }]}))}
                onDelete={(id) => removeItem('education', id)}
            />
            <ExperienceForm
                cv={cv}
                headline="Practical Experience"
                category="practical"
                buttonText="Add Pratical Experience"
                updateItem={(id, field, value) => updateItem('practical', id, field, value)}
                moveItem={(fromIndex, toIndex) => moveItem('practical', fromIndex, toIndex)}
                onAdd={() => setCV(prev => ({...prev, practical: [...prev.practical, { id: crypto.randomUUID(), place: '', title: '', fromDate: '', toDate: '' }]}))}
                onDelete={(id) => removeItem('practical', id)}
                showResponsibilities={true}
            />
            <button
                className="form-button"
                type="submit"
                /* onClick={() => setStep('review')}
                disabled={cv.contactInfo.email !== cv.contactInfo.repeatEmail} */
            >Review and Submit CV</button>
            <button
                className="form-button"
                type="button"
                onClick={() => setStep('review')}
            >See Information</button>
        </form>)
    }