import React from "react";

const Works = () => {
	return (
		<div className="flex flex-col items-center w-full px-5 py-32 lg:px-8 bg-grey">
			<div className="container">
				{/* headline */}
				<span className="font-bold tracking-widest uppercase text-accent">
					Portfolio
				</span>
				<p className="text-4xl font-semibold leading-snug max-w-[900px]">
					Browse my portfolio to see how I turn ideas into impactful,
					animated designs and digital solutions.
				</p>

				{/* Bento Grid */}
				<div className="grid w-full grid-cols-8 gap-3 py-16">
					<div className="col-span-5 h-[500px] bg-dark rounded-2xl" />
					<div className="col-span-3 h-[500px] bg-dark rounded-2xl" />
					<div className="col-span-3 h-[500px] bg-dark rounded-2xl" />
					<div className="col-span-5 h-[500px] bg-dark rounded-2xl" />
					<div className="col-span-4 h-[500px] bg-dark rounded-2xl" />
					<div className="col-span-4 h-[500px] bg-dark rounded-2xl" />
				</div>
			</div>
		</div>
	);
};

export default Works;
