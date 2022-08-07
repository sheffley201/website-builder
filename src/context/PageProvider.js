import { useState } from "react";

import PageContext from "./page-context";
import Header from "../components/modules/Header/Header";
import NavBar from "../components/modules/NavBar/NavBar";
import About from "../components/modules/About/About";
import Footer from "../components/modules/Footer/Footer";

const PageProvider = ({ children }) => {

	const pageContext = {
		page: {
            "header": {
                id: 'header',
                component: <Header />,
            },
            "navbar": {
                id: 'navbar',
                component: <NavBar />,
            },
            "about":{
                id: "about",
                component: <About />,
            },
            "footer": {
                id: "footer",
                component: <Footer />,
            },
        },
        columns: {
            'sidebar': {
                id: 'sidebar',
                title: 'Sections',
                modules: ['header', 'navbar', 'about', 'footer'],
            }
        },
	};

	return (
		<PageContext.Provider value={pageContext}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
