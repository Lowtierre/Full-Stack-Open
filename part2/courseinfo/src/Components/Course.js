const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ course, parts }) => {
  console.log('Content')
  parts.map((part) => console.log(course.id.toString() + part.id.toString()))
  return (
    parts.map((part) =>
        <Part
          key={course.id.toString() + part.id.toString()}
          part={part}
        />
    )
  )
}

const Course = ({ courses }) => {
  return (
    courses.map((course) =>
      <div key={course.id} >
        <Header name={course.name} />
        <Content course={course} parts={course.parts} />
        <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
      </ div>
    )
  )
}

export default Course