import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Initialize Materialize JS
		M.AutoInit();
	});
	return (
		<div className='App'>
			<SearchBar />
			<header className='App-header'>Tech Logger</header>
		</div>
	);
};

export default App;
