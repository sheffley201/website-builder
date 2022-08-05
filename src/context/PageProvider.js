import { useState } from "react";

import PageContext from "./page-context";
import Header from "../components/modules/Header/Header";
import NavBar from "../components/modules/NavBar/NavBar";
import About from "../components/modules/About/About";
import Footer from "../components/modules/Footer/Footer";

const PageProvider = ({ children }) => {

	const pageContext = {
		page: [
            <Header />,
            <NavBar />,
            <About />,
            <Footer />
        ],
	};

	return (
		<PageContext.Provider value={pageContext}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
