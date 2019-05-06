import React from 'react';
import logo from './logo.svg';
import './App.css';

import HookExample from './HookExample';
import Loader from './Loader';

function App() {
	return (
		<div className="App">
			<HookExample />
			<Loader />
		</div>
	);
}

export default App;
