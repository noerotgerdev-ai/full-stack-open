import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const votesArray = new Array(anecdotes.length).fill(0);

const Button = ({ onClick, disabled = false, text }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

const AnecdoteOfTheDay = ({ votes, selected }) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
    </div>
  );
};

const AnecdoteWithMostVotes = ({ votes }) => {
  const max = Math.max(...votes);
  const index = votes.indexOf(max);

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[index]}</div>
      <div>has {votes[index]} votes</div>
    </div>
  );
};

const App = () => {
  const [votes, setVotes] = useState(votesArray);
  const [selected, setSelected] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleNextAnecdoteClick = () => {
    let numberRandom;
    do {
      numberRandom = Math.floor(Math.random() * anecdotes.length);
    } while (numberRandom === selected);
    setSelected(numberRandom);
    setDisabled(false);
  };

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    setDisabled(true);
  };

  return (
    <div>
      <AnecdoteOfTheDay votes={votes} selected={selected} />

      <Button onClick={handleVoteClick} disabled={disabled} text="vote" />
      <Button onClick={handleNextAnecdoteClick} text="next anecdote" />

      <AnecdoteWithMostVotes votes={votes} />
    </div>
  );
};

export default App;
