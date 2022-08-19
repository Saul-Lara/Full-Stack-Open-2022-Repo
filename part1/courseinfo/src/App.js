const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.name} {props.exerciseNumber}
		</p>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part name={props.parts[0].part} exerciseNumber={props.parts[0].exercises} />
			<Part name={props.parts[1].part} exerciseNumber={props.parts[1].exercises} />
			<Part name={props.parts[2].part} exerciseNumber={props.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

	return (
		<p>Number of exercises {total}</p>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const parts = [
		{
			part: 'Fundamentals of React',
			exercises: 10
		},
		{
			part: 'Using props to pass data',
			exercises: 7
		},
		{
			part: 'State of a component',
			exercises: 14
		}
	]

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
}

export default App