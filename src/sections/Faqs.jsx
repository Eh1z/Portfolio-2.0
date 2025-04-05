import React from "react";

const Faqs = () => {
	return (
		<div className="flex flex-col items-center w-full px-5 py-32 lg:px-8 bg-grey">
			<div className="container ">
				{/* headline */}
				<span className="font-bold tracking-widest uppercase text-accent">
					FAQS
				</span>
				<p className="text-4xl font-semibold leading-snug max-w-[900px]">
					Do you have a question you want to ask?
				</p>

				{/*  */}

				<div className="grid w-full grid-cols-5 gap-8 py-8">
					{/* Image */}
					<div className="col-span-2 bg-dark rounded-2xl h-[600px]" />
					{/* Faqs */}
					<div className="col-span-3 border rounded-2xl ">faqs</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
