import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';

const LogList = ({ log: { logs, loading } }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No Logs to Show</p>
			) : (
				logs.map(log => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

LogItem.propTypes = {
	logs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps)(LogList);
