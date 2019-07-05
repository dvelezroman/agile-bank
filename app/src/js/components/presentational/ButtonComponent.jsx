import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ name, title, onPressButton }) => (
	<div className="form-group text-center">
		<button
			onClick={onPressButton}
			type="submit"
			className="btn btn-primary btn-lg btn-block"
		>
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
