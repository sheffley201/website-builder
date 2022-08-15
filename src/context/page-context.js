import React from "react";

const PageContext = React.createContext({
    page: {},
    columns: {},
    colors: [],
    addModule: module => {},
    removeModule: id => {},
    onDragEnd: result => {},
    setHeaderText: text => {},
    setAboutText: text => {},
    setFooterText: text => {},
});

export default PageContext;