import React from "react";

const PageContext = React.createContext({
    page: [],
    colors: [],
    addModule: module => {},
    removeModule: id => {},
});

export default PageContext;