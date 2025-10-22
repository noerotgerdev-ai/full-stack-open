import Part from './Part'

const Content = ({ parts }) => (
  <div>
    {parts.map((item) => (
      <Part key={item.id} part={item} />
    ))}
  </div>
);

export default Content