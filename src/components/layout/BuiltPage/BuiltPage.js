import { useContext } from "react";
import "./BuiltPage.module.css";

import PageContext from "../../../context/page-context";
import Module from "../../modules/Module/Module";

const BuiltPage = props => {
    const pageContext = useContext(PageContext);

    return (
        <ul>
            {pageContext.page.map(module => {
                return (
                    <Module key={module.id}>
                        {module}
                    </Module>
                );
            })}
        </ul>
    );
}

export default BuiltPage;