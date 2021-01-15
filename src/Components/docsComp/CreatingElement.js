import React from 'react'

export default function CreatingElement() {
    return (
        <article className="singleDoc">
            <h2 className="singleDoc__title">Creating Element:</h2>

            <div className="singleDoc__content">
                <ul className="singleDoc__ul">
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Click on "Add" operation, fill the form, and submit.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Element's Class:</span>
                        <p className="singleDoc__p">The "class" will be used for css class and the name identifier. It is required.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Element's Tag:</span>
                        <p className="singleDoc__p">The "Tag" will be HTML tag, such as p, h1 ... h6, img, div, section and span etc. It is required.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Element's Text:</span>
                        <p className="singleDoc__p">Element's text is not mandatory, if you want to create a container element like "div" you can leave it empty.</p>
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Once element is created it will be appended to "Main" root.</p>
                    </li>
                </ul>
            </div>
        </article>
    )
}
