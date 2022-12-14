import { useContext } from "react";
import styles from "./SideBar.module.css";
import { Droppable } from "react-beautiful-dnd";

import PageContext from "../../../context/page-context";
import SideBarLink from "./SideBarLink/SideBarLink";

const SideBar = props => {
	const pageContext = useContext(PageContext);

	const modules = [];

	for (let id in pageContext.columns.sidebar.modules) {
		modules.push(pageContext.page[pageContext.columns.sidebar.modules[id]]);
	}

	return (
		<Droppable droppableId={pageContext.columns.sidebar.id}>
			{provided => (
				<ul ref={provided.innerRef} {...provided.droppableProps}>
					{modules.map((module, index) => {
						return (
							<SideBarLink
								key={module.id}
								id={module.id}
								index={index}
							>
								{module.sidebarComponent}
							</SideBarLink>
						);
					})}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	);
};

export default SideBar;
