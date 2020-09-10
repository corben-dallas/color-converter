import React from 'react';

const Form = ({onInputChange, hexValue, rgbValue}) => {
	return (
		<div className="converter__form">
			<input 
				type="text"
				value={hexValue}
				onChange={onInputChange}
				name="color"
				placeholder="#HEX"
				className="form__content form__content--input"
			/>
			<div className="form__content form__content--result">{rgbValue}</div>
		</div>
	)
}

export default Form;
