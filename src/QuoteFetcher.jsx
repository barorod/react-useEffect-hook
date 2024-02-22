import { useEffect, useState } from 'react';

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function QuoteFetcher() {
	const [quote, setQuote] = useState({ text: '', author: '' });
	useEffect(() => {
		(async function () {
			const response = await fetch(RANDOM_QUOTE_URL);
			const jsonResponse = await response.json();
			const randomQuote = jsonResponse.quote;
			setQuote(randomQuote);
		})();
	}, [setQuote]);
	async function fetchQuote() {
		const response = await fetch(RANDOM_QUOTE_URL);
		const jsonResponse = await response.json();
		const randomQuote = jsonResponse.quote;
		setQuote(randomQuote);
	}

	return (
		<div>
			<h1>{quote.text}</h1>
			<h2>{quote.author}</h2>
			<button onClick={fetchQuote}>Get Quote Using handler</button>
		</div>
	);
}
