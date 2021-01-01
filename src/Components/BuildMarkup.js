import React, { useContext } from 'react';
import { appContext } from '../Context';

export default function BuildMarkup() {
    const context = useContext(appContext);
    const { addElementAsChild, markup } = context;
    let droppedObj;

    // A SINGLE MARKUP ELEMENT ON HTML SECTION
    function displayMarkup(obj){
        return <div className="previewElement" key={obj.key} draggable="true" 
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop.bind(obj)}
            onDragOver={handleDragOver}
            data-branch={obj.branch}>
            <p className="previewElement__name">{obj.class}</p>
            {
                obj.children.length > 0 ? obj.children.map(displayMarkup) : null
            }
        </div>
    }

    function handleDragEnter(e){
        const { target, relatedTarget } = e;

        if(relatedTarget && relatedTarget.tagName === "P" && relatedTarget.parentElement.className.includes("previewElement")){
            droppedObj = relatedTarget.parentElement;
        }

        target.parentElement.classList.add('draggedOver')
    }
    function handleDragLeave(e){
        e.target.parentElement.classList.remove('draggedOver')
    }
    function handleDragOver(e){
        e.preventDefault();
    }
    function handleDrop(e){
        handleDragLeave(e);
        const { target : { parentElement: { dataset: { branch } } }} = e;

        addElementAsChild(e.target, branch, droppedObj); //target elem, branch of target, elementInObjForm
    }

    return (
        <div className="markup">
            <h3 className="markup__title">HTML</h3>
            
            <div className="markup__preview">
                {
                    markup.map(displayMarkup)
                }
            </div>
        </div>
    )
}

