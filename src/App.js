import "./App.css";

import PageProvider from "./context/PageProvider";

import SideBarContainer from "./components/layout/SideBar/SideBarContainer";

function App() {
	return (
		<PageProvider>
			<SideBarContainer />
		</PageProvider>
	);
}

export default App;
