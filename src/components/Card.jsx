import React from "react";

const Card = ({ children }) => {
	return (
		<div className="card bg-base-100 w-90 shadow-lg border border-gray-200/30">
			<div className="card-body">{children}</div>
		</div>
	);
};

export default Card;