import React from "react";

const Hero = () => {
	return (
		<div className="container flex flex-col items-center gap-8 px-5 py-16">
			{/* Text Div */}
			<div className="flex flex-col justify-between w-full gap-3 xl:flex-row">
				{/* main text */}
				<span className="font-semibold uppercase text-8xl">
					Godsent <br />
					Ehiz
				</span>
				{/* tagline */}
				<p className="w-full max-w-[400px]">
					I design to solve problems, make a difference, and bring
					your ideas to life—simple, effective, and customized for
					you.
				</p>
			</div>

			{/* Image Div */}
			<div className="bg-gray-600 rounded-3xl w-full h-[450px]">
				Image
			</div>

			{/* Carousel Items */}
			<div>List of services</div>
		</div>
	);
};

export default Hero;
