import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll([...allClicks, "L"]);
    console.log("left before", left)
    setLeft(left + 1);
    console.log("left after", left)
    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll([...allClicks, "R"]);
    setRight(right + 1);
    setTotal(left + right);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(" ")}</p>
      <p>Total asincrono: {total}</p>
      <p>Total clicks: {allClicks.length}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
