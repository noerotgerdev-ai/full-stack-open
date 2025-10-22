const Total = ({ total }) => {
  const result = total.reduce((acc, item) => acc + item.exercises, 0);

  return (
    <p>
      <strong>Total of {result} exercises</strong>
    </p>
  );
};

export default Total;
