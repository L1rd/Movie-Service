import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { theme } from 'utils/theme';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
