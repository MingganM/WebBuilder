import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaClipboard } from "react-icons/fa";

import { appContext } from '../Context';
import { displayElements } from '../Components/BuildDisplay';

export default function GetCode() {
    const context = useContext(appContext);
    const [state, setState] = useState({newHtml:"", newCss:""}); 
    const { styles } = context;
    
    const hiddenElem = useRef(null);
    const htmlCode = useRef(null);
    const cssCode = useRef(null);

    useEffect(() => {
        setState({
            ...state,
            newCss: makeCss(styles),
            newHtml: makeHTML(hiddenElem.current.innerHTML)
        })
    }, []);

    function handleCopy(e){
        e.preventDefault();
        const {target: {dataset: { copy }}} = e;
        let textToWrite;
        let copiedElem = copy;

        if(!copiedElem){
            const {parentElement: {dataset: { copy }}} = e.target;
            copiedElem = copy;
        }

        if(copiedElem === "html") textToWrite = htmlCode.current.textContent;
        else textToWrite = cssCode.current.textContent;
        console.log(textToWrite);
        navigator.clipboard.writeText(textToWrite);
    }

    return (
        <section className="getCode">
            <div className="hiddenElements" ref={hiddenElem}>
                {
                    displayElements(context, false)
                }
            </div>
            
            <div className="showCode">
                <div className="showCode__box">
                    <h1 className="getCode__sectionTitle">HTML:</h1>
                    <button className="showCode__btn" data-copy="html" onClick={handleCopy}> <span className="icon"><FaClipboard /></span> </button>
                    <p className="showCode__code" ref={htmlCode}>
                        {
                            state.newHtml
                        }
                    </p>
                </div>

                <div className="showCode__box">
                    <h1 className="getCode__sectionTitle">CSS:</h1>
                    <button className="showCode__btn" data-copy="css" onClick={handleCopy}> <FaClipboard /> </button>
                    <p className="showCode__code" ref={cssCode}>
                        {
                            state.newCss
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}
function makeHTML(html){
    let htmlHeader = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title></title>
                <link rel="stylesheet" href="./styles.css">
            </head>
        <body>
    `;
    let htmlFooter = `
    </body>
    </html>
    `;
    let resultHtml = htmlHeader + html + htmlFooter;
    return resultHtml;
}

function makeCss(styles){
    let css = "*{margin:0;padding:0;box-sizing:border-box;}";

    Object.keys(styles).forEach(style => {
        css += style + " { ";

        Object.keys(styles[style]).forEach(styleProperties => {
                css += styleProperties + ":" + styles[style][styleProperties] + ";"
        });

        css += "}"
    })
    return css;
}
