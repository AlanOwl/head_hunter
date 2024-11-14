import AppRoutes from "../Routes/Routes";
import React, { useEffect, useState } from 'react';

function App() {

	const[state, setState] = useState(null);

	const callBackendAPI = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};
	useEffect(() => {
		callBackendAPI()
			.then(res => setState(res.express))
			.catch(err => console.log(err));
	}, [])

	return (
		<div className="App">
			<div className="container">
				<AppRoutes />
				{state}
			</div>
			
		</div>
	);
}

export default App;