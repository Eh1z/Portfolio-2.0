import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { useEffect, useState } from "react";
import Menu from "./components/constants/menu";

function App() {
	const [section, setSection] = useState(0);
	const [menuOpened, setMenuOpened] = useState(false);

	useEffect(() => {
		setMenuOpened(false);
	}, [section]);
	return (
		<>
			<Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
				<color attach="background" args={["#CDD5DF"]} />
				<ScrollControls pages={8} damping={0.1}>
					<ScrollManager section={section} onSectionChange={setSection} />
					<Experience section={section} />
					<Scroll html>
						<Interface />
					</Scroll>
				</ScrollControls>
			</Canvas>
			<Menu
				onSectionChange={setSection}
				menuOpened={menuOpened}
				setMenuOpened={setMenuOpened}
			/>
		</>
	);
}

export default App;
