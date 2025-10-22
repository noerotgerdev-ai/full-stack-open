const Total = ({ total }) => {
  const result = total.reduce((acc, item) => acc + item.exercises, 0);

  return <p>Total {result}</p>;
};

export default Total;
