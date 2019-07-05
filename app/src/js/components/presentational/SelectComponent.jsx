import React from "react";
import PropTypes from "prop-types";

const SelectComponent = ({
	styles,
	title,
	name,
	options,
	id,
	value,
	handleChange
}) => (
	<div className="form-group">
		<label htmlFor={name}>{title}</label>
		<select
			id={id}
			value={value}
			className="form-control"
			onChange={event => handleChange(name, event)}
		>
			{options.map((option, i) => (
				<option key={`option.value-${i}`} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

SelectComponent.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	styles: PropTypes.object.isRequired
};

export { SelectComponent };
