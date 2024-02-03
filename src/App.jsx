const App = ({ course }) => {
  // console.log(course);

  const exerciseFunc = (index) => {
    const exerciseArr = course[index].parts.map((element) => element.exercises);
    return exerciseArr.reduce((acc, curr) => acc + curr);
  };

  return (
    <div>
      <h1>Web development Curriculum</h1>
      <h2>{course[0].name}</h2>
      {course[0].parts.map((items) => (
        <p key={items.id}>
          {items.name} {items.exercises}
        </p>
      ))}
      <h2>total of {exerciseFunc(0)} exercises</h2>
      <h1>{course[1].name}</h1>
      {course[1].parts.map((items) => (
        <p key={items.id}>
          {items.name} {items.exercises}
        </p>
      ))}
      <h2>total of {exerciseFunc(1)} exercises</h2>
    </div>
  );
};

export default App;
