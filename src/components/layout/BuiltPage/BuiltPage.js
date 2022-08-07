import { useContext } from "react";
import "./BuiltPage.module.css";
import { Droppable } from "react-beautiful-dnd";

import PageContext from "../../../context/page-context";
import Module from "../../modules/Module/Module";

const BuiltPage = props => {
	const pageContext = useContext(PageContext);

    const modules = [];

    for (let key in pageContext.page) {
        modules.push(pageContext.page[key]);
    }

    console.log(modules);

	return (
		<Droppable droppableId={pageContext.columns.sidebar.id}>
			{provided => (
				<ul ref={provided.innerRef} {...provided.droppableProps}>
					{modules.map((module, index) => {
						return (
							<Module
								key={module.id}
								id={module.id}
								index={index}
							>
								{module.component}
							</Module>
						);
					})}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	);
};

export default BuiltPage;
