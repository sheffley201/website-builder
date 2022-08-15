import { useContext } from "react";

import PageContext from "../../../../context/page-context";

const BuiltAbout = (props) => {
    const pageContext = useContext(PageContext);

    const aboutText = pageContext.page.about.text;

    return (
        <div className="built-about">
            <h1>About</h1>
            <p>
                {aboutText}
            </p>
        </div>
    );
}

export default BuiltAbout;