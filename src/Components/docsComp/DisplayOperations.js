import React from 'react'

export default function DisplayOperations() {
    return (
        <article className="singleDoc">
            <h2 className="singleDoc__title">Display Operations:</h2>

            <div className="singleDoc__content">
                <ul className="singleDoc__ul">
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Select:</span>
                        <p className="singleDoc__p"> Selects a particular element from markup list, That can later be styled or deleted.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Move:</span>
                        <p className="singleDoc__p"> Moves Element from markup list, they can be dropped in as another element's child but they will never be child of main branch again.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Delete:</span>
                        <p className="singleDoc__p"> Deletes the selected element.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Add:</span>
                        <p className="singleDoc__p"> Adds an element in the markup.</p>
                    </li>
                    <li className="singleDoc__li">
                        <span className="singleDoc__span">Add Attribute:</span>
                        <p className="singleDoc__p"> Will give the selected element an attribute.</p>
                    </li>
                </ul>

            </div>
        </article>
    )
}
