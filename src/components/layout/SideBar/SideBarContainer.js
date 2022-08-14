import SideBar from "./SideBar";
import PageContext from "../../../context/page-context";
import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const SideBarContainer = props => {
	const pageContext = useContext(PageContext);

	const dragEndHandler = result => {
		pageContext.onDragEnd(result);
	};

	return (
		<DragDropContext onDragEnd={dragEndHandler}>
			<SideBar />
		</DragDropContext>
	);
};

export default SideBarContainer;
