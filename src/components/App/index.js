import React from 'react';
import './index.css';
import WidgetsContainer from '../../containers/WidgetsContainer';

function App() {
	return (
		<div className="page">
			<header className="page__header">
				Header
			</header>
			<main className="page__main">
				<WidgetsContainer />
			</main>
			<footer className="page__footer">
				Footer
			</footer>
		</div>
	);
}

export default App;
