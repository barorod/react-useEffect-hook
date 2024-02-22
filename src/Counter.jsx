import { useEffect, useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	const handleChange = (e) => setName(e.target.value);
	useEffect(function myEffect() {
		console.log('my effect was called');
	}, []);
	const increment = () => setCount((c) => c + 1);
	return (
		<div>
			<button onClick={increment}>{count}</button>
			<p>{name}</p>
			<input value={name} onChange={handleChange} type="text" />
		</div>
	);
}
