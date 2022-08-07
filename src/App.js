import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";

import PageProvider from "./context/PageProvider";

import BuiltPage from "./components/layout/BuiltPage/BuiltPage";

function App() {
    const onDragEnd = result => {}

	return (
		<PageProvider>
			<DragDropContext onDragEnd={onDragEnd}>
				<BuiltPage />
			</DragDropContext>
		</PageProvider>
	);
}

export default App;
