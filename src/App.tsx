import React, { FC } from 'react';
import { Main } from 'components';
import { Header } from './components';

const App: FC = () => (
	<div className="app">
		<Header />
		<Main />
	</div>
);

export default App;
