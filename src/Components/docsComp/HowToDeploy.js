import React from 'react'

export default function HowToDeploy() {
    return (
        <article className="singleDoc">
            <h2 className="singleDoc__title">How To Deploy</h2>

            <div className="singleDoc__content">
                <ul className="singleDoc__ul">
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Once you've built your website, create a folder, make two files in it by the names of "index.txt" and "style.txt".</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Go to "GetCode" section, and copy the "HTML" text and paste it in your index.txt file.</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Similarly copy the "CSS" text and paste it in your style.txt file.</p>
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">Now change the file name of index.txt and style.txt into "index.html" and "style.css".</p> 
                    </li>
                    <li className="singleDoc__li">
                        <p className="singleDoc__p">You have successfully built a website now. Follow any of the online tutorials on how to host a website to see your website live.</p> 
                    </li>
                </ul>
            </div>
        </article>
    )
}
