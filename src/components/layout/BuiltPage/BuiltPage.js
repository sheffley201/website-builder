import {useContext} from "react";
import "./BuiltPage.module.css";

import PageContext from "../../../context/page-context";

const BuiltPage = props => {
    const pageContext = useContext(PageContext);

    const modules = [];

    for (let id in pageContext.columns.sidebar.modules) {
        modules.push(pageContext.page[pageContext.columns.sidebar.modules[id]]);
    }
    
    return (
        <div className="built-page">
            {modules.map((module, index) => {
                return (
                    <div key={module.id}>
                        {module.mainComponent}
                    </div>
                );
            })}
        </div>
    );
}

export default BuiltPage;