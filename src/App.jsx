import { useState } from 'react'
import { useEffect } from 'react'
import EditStep from './components/EditStep.jsx'
import ReviewStep from './components/ReviewStep.jsx'

import './App.css'

function App() {
	const [step, setStep] = useState('edit');
	const [cv, setCV] = useState({
  		contactInfo: {firstName: '', lastName: '', email: '', repeatEmail: '', phone: ''},
		education: [{ id: crypto.randomUUID(), place: '', title: '', fromDate: '', toDate: '' }],
		practical: [{ id: crypto.randomUUID(), place: '', title: '', responsibilities: '', fromDate: '', toDate: '' }],
	});
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	function displayStep() {
		if (step === 'edit') {
			return (
				<EditStep 
					cv={cv}
					setCV={setCV}
					setStep={setStep}
				/>)
		} else if (step === 'review') {
			return (
				<ReviewStep
					cv={cv}
					setStep={setStep}
				/>
			)
		} else if (step === 'submitted') {
			return (
				<div className='submission-screen'>
					<h1>Thank you for your submission!<span className='icon'>🎉</span></h1>
				</div>
			)
		}
	}

	return (
		<div className='app-layout'>
			<div className="spacer"></div>
			<div className="main-content">
				{displayStep()}
			</div>
			<div className='theme-area'>
				<button className='theme'
					type="button"
					aria-pressed={theme === 'dark'}
					onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}	
				>{theme === 'dark' ? '🌙' : '☀️'}</button>
			</div>
		</div>
	)
}

export default App