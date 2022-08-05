import "./App.css";

import PageProvider from "./context/PageProvider";

import BuiltPage from "./components/layout/BuiltPage/BuiltPage";

function App() {

	return (
		<PageProvider>
			<BuiltPage />
		</PageProvider>
	);
}

export default App;
