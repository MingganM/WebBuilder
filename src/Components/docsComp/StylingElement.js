import React from 'react'

export default function StylingElement() {
    return (
        <article className="singleDoc">
            <h2 className="singleDoc__title">Styling Element</h2>

            <div className="singleDoc__content">
                <ul className="singleDoc__ul">
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Select the element from markup list with selector tool and apply styles to it.</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Styles are normal css styles. Elements are styled by their class, do not give two elements same class name.</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Adding styles through "Add Attribute" will not work.</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Images can only be passed as links in "Background Image" or in add attribute add src of img tag as a url.</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">If you don't know which style does what, google that style property to learn more about it.</p> 
                    </li>
                </ul>
            </div>
        </article>
    )
}
