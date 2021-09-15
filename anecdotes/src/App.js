import React, { useState, useEffect } from 'react';
import Button from './Button';

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
	];

	const [ selected, setSelected ] = useState(0);
	const [ votes, setVotes ] = useState({});

	useEffect(
		() => {
			const fullObject = {};
			for (let i = 0; i < anecdotes.length; i++) {
				fullObject[i] = 0;
			}
			setVotes(fullObject);
		},
		[ anecdotes.length ]
	);

	const handleClick = () => {
		const random = Math.floor(Math.random() * anecdotes.length);
		setSelected(random);
	};

	const handleVoteClick = () => {
		const votesObj = { ...votes };
		votesObj[selected] += 1;
		setVotes(votesObj);
	};

	const maxVotes = Object.values(votes);
	const maxIndex = Math.max(...maxVotes);
	const findIndex = maxVotes.indexOf(maxIndex);

	return (
		<div>
			<h1>Anecdote of the Day</h1>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
			<div className="buttons">
				<Button onClick={handleClick} text="Next Anecdote" />
				<Button onClick={handleVoteClick} text="Vote" />
			</div>
			<h1>Anecdote with the most votes</h1>
			<p>{anecdotes[findIndex]}</p>
		</div>
	);
};

export default App;
