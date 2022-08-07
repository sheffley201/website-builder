import React from "react";

const PageContext = React.createContext({
    page: {},
    columns: {},
    colors: [],
    addModule: module => {},
    removeModule: id => {},
});

export default PageContext;