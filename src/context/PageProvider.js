import { useState, useEffect } from "react";

import PageContext from "./page-context";
import Header from "../components/SideBar/Header/Header";
import NavBar from "../components/SideBar/NavBar/NavBar";
import About from "../components/SideBar/About/About";
import Footer from "../components/SideBar/Footer/Footer";

const PageProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const localOrder = localStorage.getItem("order");
        if (localOrder) {
            setOrder(JSON.parse(localOrder));
        } else {
            setOrder([
                "header",
                "navbar",
                "about",
                "footer"
            ]);
        }
    }, []);

	const page = {
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

	return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
};

export default PageProvider;
