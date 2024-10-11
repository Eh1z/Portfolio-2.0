import { button } from "leva";
import React from "react";

const Menu = (props) => {
	const { onSectionChange, menuOpened, setMenuOpened } = props;

	return (
		<div>
			<button
				onClick={() => setMenuOpened(!menuOpened)}
				className="z-20 p-3 rounded-xl fixed top-12 right-12 bg-[--accent] w-10 h-10"
			>
				<div
					className={`bg-white h-0.5 rounded-md w-full transition-all ${
						menuOpened ? "rotate-45 translate-y-1" : ""
					}`}
				/>
				<div
					className={`bg-white h-0.5 rounded-md w-full my-1 ${
						menuOpened ? "hidden" : ""
					}`}
				/>
				<div
					className={`bg-white h-0.5 rounded-md w-full transition-all ${
						menuOpened ? "-rotate-45 " : ""
					}`}
				/>
			</button>

			<div
				className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-clip flex flex-col ${
					menuOpened ? "w-80" : "w-0"
				}`}
			>
				<div className="flex-1 flex items-start justify-center flex-col gapp-6 p-8">
					<MenuItem label="Home" onClick={() => onSectionChange(0)} />
					<MenuItem label="About" onClick={() => onSectionChange(1)} />
					<MenuItem label="Portfolio" onClick={() => onSectionChange(3)} />
					<MenuItem
						label="Work Experience"
						onClick={() => onSectionChange(4)}
					/>
					<MenuItem label="Project Phases" onClick={() => onSectionChange(5)} />
					<MenuItem label="Contact" onClick={() => onSectionChange(8)} />
				</div>
			</div>
		</div>
	);
};

export default Menu;

const MenuItem = (props) => {
	const { label, onClick } = props;
	return (
		<button
			onClick={onClick}
			className="text-xl font-bold cursor-pointer hover:text-[--accent] transition-colors"
		>
			{label}
		</button>
	);
};
