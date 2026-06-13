import { useRef, useState, Fragment } from 'react'
import ExperienceItem from './ExperienceItem.jsx'

export default function ExperienceForm({ cv, headline, category, buttonText, updateItem, moveItem, onAdd, onDelete, showResponsibilities = false }) {
	const dragIndexRef = useRef(null);
	const [draggingIndex, setDraggingIndex] = useState(null);

	return (
		<fieldset>
			<legend className='section-headline'>{headline}</legend>
			{cv[category].map((item, index) => (
				<ExperienceItem
					key={item.id}
					item={item}
					onChange={(field, value) => updateItem(item.id, field, value)}
					dragHandlers={
						{
							onDragStart: () => { dragIndexRef.current = index; setDraggingIndex(index) },
							onDragOver: e =>  e.preventDefault(),
							onDragEnd: () => { setDraggingIndex(null) },
							onDrop: e => moveItem(dragIndexRef.current, index)
						}}
					isDragging = { draggingIndex === index }
					onDelete={onDelete}
					showResponsibilities={showResponsibilities}
				/>
			))}
			<button
				className='form-button'
				type="button"
				onClick={onAdd}
			>{buttonText}</button>
		</fieldset>
	)
}