import "./App.css";

import PageProvider from "./context/PageProvider";

import BuiltPageContainer from "./components/layout/BuiltPage/BuiltPageContainer";

function App() {
	return (
		<PageProvider>
			<BuiltPageContainer />
		</PageProvider>
	);
}

export default App;
