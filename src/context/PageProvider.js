import { useState, useEffect } from "react";

import PageContext from "./page-context";
import Header from "../components/layout/SideBar/Header/Header";
import NavBar from "../components/layout/SideBar/NavBar/NavBar";
import About from "../components/layout/SideBar/About/About";
import Footer from "../components/layout/SideBar/Footer/Footer";

import BuiltHeader from "../components/layout/BuiltPage/Header/BuiltHeader";
import BuiltNavBar from "../components/layout/BuiltPage/NavBar/BuiltNavBar";
import BuiltAbout from "../components/layout/BuiltPage/About/BuiltAbout";
import BuiltFooter from "../components/layout/BuiltPage/Footer/BuiltFooter";

const PageProvider = ({ children }) => {
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const localOrder = localStorage.getItem("order");
		if (localOrder) {
			setOrder(JSON.parse(localOrder));
		} else {
			setOrder(["header", "navbar", "about", "footer"]);
		}
	}, []);

	const page = {
		page: {
			header: {
				id: "header",
				sidebarComponent: <Header />,
                mainComponent: <BuiltHeader />,
			},
			navbar: {
				id: "navbar",
				sidebarComponent: <NavBar />,
                mainComponent: <BuiltNavBar />,
			},
			about: {
				id: "about",
				sidebarComponent: <About />,
                mainComponent: <BuiltAbout />,
			},
			footer: {
				id: "footer",
				sidebarComponent: <Footer />,
                mainComponent: <BuiltFooter />,
			},
		},
		columns: {
			sidebar: {
				id: "sidebar",
				title: "Sections",
				modules: order,
			},
		},
	};

	const onDragEnd = result => {
		console.log("running");
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const column = page.columns[source.droppableId];
		const newModules = Array.from(column.modules);
		newModules.splice(source.index, 1);
		newModules.splice(destination.index, 0, draggableId);

		localStorage.setItem("order", JSON.stringify(newModules));

		setOrder(newModules);
	};

	const pageContext = {
		...page,
		onDragEnd: onDragEnd,
	};

	return (
		<PageContext.Provider value={pageContext}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
