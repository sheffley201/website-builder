import { Draggable } from "react-beautiful-dnd";

const Module = props => {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{provided => (
				<li
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{props.children}
				</li>
			)}
		</Draggable>
	);
};

export default Module;
