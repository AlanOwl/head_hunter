import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from "./features/store.js"
import "./styles/common.css"
import "./styles/reset.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />

			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

