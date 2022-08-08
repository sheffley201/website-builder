import { useState } from "react";

import PageContext from "./page-context";
import Header from "../components/modules/Header/Header";
import NavBar from "../components/modules/NavBar/NavBar";
import About from "../components/modules/About/About";
import Footer from "../components/modules/Footer/Footer";

const PageProvider = ({ children }) => {
	const [page, setPage] = useState({
		page: {
			header: {
				id: "header",
				component: <Header />,
			},
			navbar: {
				id: "navbar",
				component: <NavBar />,
			},
			about: {
				id: "about",
				component: <About />,
			},
			footer: {
				id: "footer",
				component: <Footer />,
			},
		},
		columns: {
			sidebar: {
				id: "sidebar",
				title: "Sections",
				modules: ["header", "navbar", "about", "footer"],
			},
		},
	});

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

        const newColumn = {
            ...column,
            modules: newModules,
        };

        const newPage = {
            ...page,
            columns: {
                ...page.columns,
                [newColumn.id]: newColumn,
            },
        };

        setPage(newPage);
	};

    const pageContext = {
        ...page,
        onDragEnd: onDragEnd,
    };

	return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
};

export default PageProvider;
