import React, { useRef } from 'react';

export default function AddElement({createElement, show, close}) {
    const elemClass = useRef(null);
    const elemTag = useRef(null);
    const elemText = useRef(null);

    function handleSubmit(e){
        close(e);

        const {current: { value: textVal }} = elemText;
        const {current: { value: tagVal }} = elemTag;
        const {current: { value: classVal }} = elemClass;

        createElement(classVal, tagVal, textVal);

        elemText.current.value = "";
        elemTag.current.value = "";
        elemClass.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit} className={show ? "addElement addElement--show" : "addElement"}>
            <button className="addElement__btn addElement--close" onClick={close}>
                X
            </button>

            <label htmlFor="elemClass" className="elemClass">
                Element's Class:
                <input type="text" id="elemClass" ref={elemClass}/>
            </label>
            <label htmlFor="elemTag" className="elemTag">
                Element's Tag:
                <input type="text" id="elemTag" ref={elemTag}/>
            </label>
            <label htmlFor="elemText" className="elemText">
                Element's Text:
                <textarea type="text" id="elemText" ref={elemText}></textarea>
            </label>

            <button className="addElement__btn">Create Element</button>
        </form>
    )
}