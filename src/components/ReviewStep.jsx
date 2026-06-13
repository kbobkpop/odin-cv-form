export default function ReviewStep( {cv, setStep} ) {

	return (
		<div className="formatted-form">
			<section>
				<h2>Contact Info</h2>
				<div className="formatted-container">
					<div>Name: </div><div>{cv.contactInfo.firstName} {cv.contactInfo.lastName}</div>
					<div>Email: </div><div>{cv.contactInfo.email}</div>
					<div>Phone: </div><div>{cv.contactInfo.phone}</div>
				</div>
			</section>
			<section>
				<h2>Educational Experience</h2>
				<div className="experience-container">
					{cv.education.map(item => (
						<div className="formatted-container" key={item.id}>
							<div>Period: </div><div>{item.fromDate + " - " + item.toDate}</div>
							<div>Title: </div><div>{item.title}</div>
						</div>
					))}
				</div>
			</section>
			<section>
				<h2>Practical Experience</h2>
				<div className="experience-container">
					{cv.practical.map(item => (
						<div className="formatted-container" key={item.id}>
							<div>Period: </div><div>{item.fromDate + " - " + item.toDate}</div>
							<div>Title: </div><div>{item.title}</div>
							<div>Responsibilities: <br />
								{item.responsibilities}
							</div>
						</div>
					))}
				</div>
			</section>
			<button
				className="form-button"
				type="button"
				onClick={() => setStep('edit')}
			>
				Edit Application
			</button>
			<button
				className="form-button"
				type="button"
				onClick={() => setStep('submitted')}
			>
				Submit Application
			</button>
		</div>)
}