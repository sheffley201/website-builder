import { useContext } from "react";

import PageContext from "../../../../context/page-context";

const BuiltFooter = props => {
    const pageContext = useContext(PageContext);

    const footerText = pageContext.page.footer.text;

    return (
        <div className="built-footer">
            <h1>Footer</h1>
            <p>
                {footerText}
            </p>
        </div>
    );
}

export default BuiltFooter;