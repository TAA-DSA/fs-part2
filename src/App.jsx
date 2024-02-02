const App = ({ course }) => {
  const exerciseArr = course.parts.map((element) => {
    return element.exercises;
  });
  console.log(exerciseArr);

  const total = exerciseArr.reduce((acc, curr) => acc + curr);
  console.log(total);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((items) => (
        <p key={items.id}>
          {items.name} {items.exercises}
        </p>
      ))}
      <h2>total of {total} exercises</h2>
    </div>
  );
};

export default App;
