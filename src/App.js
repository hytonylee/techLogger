import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import LogList from './components/logs/LogList';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Initialize Materialize JS
		M.AutoInit();
	});
	return (
		<Fragment>
			<SearchBar />
			<div className='container'>
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<LogList />
			</div>
		</Fragment>
	);
};

export default App;
