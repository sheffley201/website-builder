import { useContext } from "react";

import PageContext from "../../../../context/page-context";

const BuiltHeader = props => {
    const pageContext = useContext(PageContext);

    const headerText = pageContext.page.header.text;

    return (
        <div className="built-footer">
            <h1>Website Name</h1>
            <p>
                {headerText}
            </p>
        </div>
    );
}

export default BuiltHeader;