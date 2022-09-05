import React from 'react'

const CourseTitle = ({ name }) => {
	return (
		<h2>{name}</h2>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map(part =>
				<Part key={part.id} part={part} />
			)}
		</div>
	)
}

const Part = ({ part }) => {
	return (
		<p>{part.name} - {part.exercises}</p>
	)
}

const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => sum + part.exercises, 0);

	return (
		<p><strong>Total of exercises: {total}</strong></p>
	)
}

const Course = (props) => {
	return (
		<div>
			<CourseTitle name={props.course.name} />
			<Content parts={props.course.parts} />
			<Total parts={props.course.parts} />
		</div>
	)
}

export default Course