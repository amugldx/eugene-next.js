'use client';
import { useState } from 'react';
import Stateless from './stateless';

function Stateful() {
	const [state, setState] = useState('');

	return (
		<>
			<Stateless heading={state} />
			<button onClick={() => setState('hello')}>click</button>
		</>
	);
}

export default Stateful;
