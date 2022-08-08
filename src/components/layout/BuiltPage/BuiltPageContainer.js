import BuiltPage from "./BuiltPage";
import PageContext from "../../../context/page-context";
import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const BuiltPageContainer = props => {
	const pageContext = useContext(PageContext);

	const dragEndHandler = result => {
		pageContext.onDragEnd(result);
	};

	return (
		<DragDropContext onDragEnd={dragEndHandler}>
			<BuiltPage />
		</DragDropContext>
	);
};

export default BuiltPageContainer;
