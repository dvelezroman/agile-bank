import React from "react";
import { DetailsComponent } from "../presentational/index.jsx";

export const ModalComponent = ({ selected, closeModal }) => {
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-xl" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Transaction Details
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => closeModal()}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{selected ? <DetailsComponent selected={selected} /> : <></>}
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => closeModal()}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
