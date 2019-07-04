import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ name, title, onPressButton }) => (
	<div className="form-group">
		<button onClick={onPressButton} type="submit" class="btn btn-primary">
			{title}
		</button>
	</div>
);

ButtonComponent.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onPressButton: PropTypes.func.isRequired
};

export { ButtonComponent };
