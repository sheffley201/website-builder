import { useContext } from "react";
import "./App.css";

import PageProvider from "./context/PageProvider";

function App() {
    const pageContext = useContext(PageProvider);

	return (
		<PageProvider>
			{pageContext.page}
		</PageProvider>
	);
}

export default App;
