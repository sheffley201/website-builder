import styles from "./App.module.css";

import PageProvider from "./context/PageProvider";

import SideBarContainer from "./components/layout/SideBar/SideBarContainer";
import BuiltPage from "./components/layout/BuiltPage/BuiltPage";

function App() {
	return (
		<PageProvider>
			<div className={styles.app}>
				<SideBarContainer />
				<BuiltPage />
			</div>
		</PageProvider>
	);
}

export default App;
