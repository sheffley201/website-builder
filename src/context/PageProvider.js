import { useState } from "react";

import PageContext from "./page-context";
import About from '../components/modules/About/About';

const PageProvider = ( props ) => {
    const page = [
        <About />,
    ]

    const pageContext = {
        page,
    };

    return (
        <PageContext.Provider value={pageContext}>
            {props.children}
        </PageContext.Provider>
    );
}

export default PageProvider;