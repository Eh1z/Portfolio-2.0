import React from "react";

const Services = () => {
	return (
		<>
			{/* Services Section */}
			<div className="container flex flex-col px-5 py-32 bg-grey">
				{/* headline */}
				<span className="font-bold tracking-wide uppercase ">
					Our Services
				</span>
				<p className="w-full">
					As a solo creator, I craft visually stunning, animated UI
					websites that leave lasting impressions. But that’s just the
					start. I offer a range of digital solutions tailored to
					bring your ideas to life, from web design to custom app
					development.
				</p>

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

			{/* Process */}
			<div className="container flex flex-col px-5 py-32 text-white bg-dark min-h-[600px]">
				process
			</div>
		</>
	);
};

export default Services;
