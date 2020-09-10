import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';

function App() {
	const [hexColor, setHexColor] = useState('');
	const [rgbColor, setRgbColor] = useState('');
	const [backgroundColor, setBackgroundColor] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const { value } = e.target;
		
		if (value.length > 7) return;
		
		if (value.length === 7) validateHex(value);

		setHexColor(value);
	}

	const validateHex = (value) => {
		const isValid = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
		
		if (isValid) { 
			setRgbColor(`rgb(${parseInt(isValid[1], 16)}, ${parseInt(isValid[2], 16)}, ${parseInt(isValid[3], 16)})`)
			setBackgroundColor(value);
			setError(false);
			return;
		}
		
		setRgbColor('Ошибка!');
		setError(true);
	}

	return (
		<div 
			className="converter"
			style={error ? {backgroundColor: '#F44336'} : {backgroundColor}}
		>
			<Form 
				onInputChange={handleInputChange}
				hexValue={hexColor}
				rgbValue={rgbColor}
			/>
		</div>
	);
}

export default App;
