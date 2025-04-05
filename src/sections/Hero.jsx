import React from "react";
import { IoSparklesSharp } from "react-icons/io5";

const Hero = () => {
	const list = [
		"Brand Identity",
		"UI/UX Design",
		"Software Development",
		"3D Motion Design",
		"Web Design",
	];
	return (
		<div className="container flex flex-col items-center justify-end h-screen gap-8 px-5 pt-32 pb-8">
			{/* Text Div */}
			<div className="flex flex-col justify-between w-full gap-3 xl:flex-row">
				{/* main text */}
				<span className="font-black text-7xl">
					Hi👋🏽, I'm Godsent,
					<br />
					<span className="uppercase text-accent">
						Software Engineer
					</span>{" "}
					<br /> &{" "}
					<span className="font-light uppercase text-accent">
						Visual Designer_
					</span>
				</span>
				{/* tagline */}
				<p className="w-full max-w-[400px] ">
					<IoSparklesSharp className="text-4xl fill-accent" />
					<br />I design to solve problems, make a difference, and
					bring your ideas to life—simple, effective, and customized
					for you.
				</p>
			</div>

			{/* Image Div */}
			<div className="bg-grey2 rounded-3xl w-full h-[400px]" />

			{/* Carousel Items */}
			<div className="flex items-center justify-between w-full ">
				{list.map((item, index) => (
					<p className="text-xl">{item}</p>
				))}
			</div>
		</div>
	);
};

export default Hero;
