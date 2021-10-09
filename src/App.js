import "./App.css";
import GameBoardComponent from "./components/GameBoardComponent/GameBoardComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.js";

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<GameBoardComponent />
		</div>
	);
}

export default App;
