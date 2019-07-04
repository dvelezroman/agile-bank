import React from "react";
import PropTypes from "prop-types";

const InputComponent = ({
	styles,
	disabled,
	title,
	name,
	type,
	id,
	value,
	handleChange
}) => (
	<div className="form-group">
		<fieldset style={styles.fieldset}>
			<label htmlFor={name}>{title}</label>
			<input
				type={type}
				disabled={disabled}
				className={"form-control"}
				id={id}
				value={value}
				onChange={value => handleChange(name, value)}
				required
			/>
		</fieldset>
	</div>
);

InputComponent.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	handleChange: PropTypes.func.isRequired,
	styles: PropTypes.object.isRequired
};

export { InputComponent };
