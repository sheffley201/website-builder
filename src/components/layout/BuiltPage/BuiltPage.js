import { useContext } from "react";
import "./BuiltPage.module.css";

import PageContext from "../../../context/page-context";

const BuiltPage = props => {
    const pageContext = useContext(PageContext);

    return pageContext.page;
}

export default BuiltPage;