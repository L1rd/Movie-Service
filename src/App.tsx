import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage, Footer, Header, Main } from 'components';

const App: FC = () => (
	<div className="app">
		<Header />
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/CatalogPage" element={<CatalogPage title="Popular Movies" />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
