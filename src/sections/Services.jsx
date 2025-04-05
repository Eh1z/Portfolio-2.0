import React from "react";

const Services = () => {
	return (
		<>
			{/* Services Section */}
			<div className="flex flex-col items-center w-full px-5 py-32 lg:px-8 bg-grey">
				<div className="container flex flex-col ">
					{/* headline */}
					<span className="font-bold tracking-widest uppercase text-accent">
						Services
					</span>
					{/* Text Div */}
					<span className="text-4xl font-semibold leading-snug max-w-[900px]">
						I create stunning, animated UI websites and offer a
						range of digital solutions to bring your ideas to life.
					</span>

					{/* Services Grid */}
					<div className="grid w-full grid-cols-3 gap-3 py-8 place-items-center">
						<div className="w-full bg-dark h-[400px] rounded-xl flex justify-center items-center text-white">
							service box
						</div>
						<div className="w-full bg-dark h-[400px] rounded-xl flex justify-center items-center text-white">
							service box
						</div>
						<div className="w-full bg-dark h-[400px] rounded-xl flex justify-center items-center text-white">
							service box
						</div>
					</div>
				</div>
			</div>

			{/* Process */}
			<div className="w-full px-5 py-32 lg:px-8 flex flex-col items-center  bg-dark min-h-[600px]">
				<div className="container flex flex-col text-white">
					{/* headline */}
					<span className="font-bold tracking-widest uppercase text-accent">
						Process
					</span>
				</div>
			</div>
		</>
	);
};

export default Services;
