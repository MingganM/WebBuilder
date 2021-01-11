import React, { useContext } from 'react';
import { appContext } from '../Context';

export default function BuildMarkup() {
    const context = useContext(appContext);
    const { addElementAsChild, markup, cursorType, setSelectedClass } = context;
    let droppedObj;

    // A SINGLE MARKUP ELEMENT ON HTML SECTION
    function displayMarkup(obj){
        return <div className="previewElement" key={obj.key} draggable="true" 
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop.bind(obj)}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            data-branch={obj.branch}
            data-classname={obj.class}
            onClick={cursorType === "select" ? setSelectedClass : null}
            style={cursorType === "select" ? {cursor: "default"} : null}
            >
            <p className="previewElement__name">{obj.class}</p>
            {
                obj.children.length > 0 ? obj.children.map(displayMarkup) : null
            }
        </div>
    }
    function handleDragStart(e){
        if(cursorType !== "move") e.preventDefault();

        e.stopPropagation();
        const { target } = e;
        
        droppedObj = target;
    }
    function handleDragEnter(e){
        e.stopPropagation();
        const { target } = e;
        
        if(cursorType === "move"){
            target.parentElement.classList.add('draggedOver')
        }
    }
    function handleDragLeave(e){
        e.stopPropagation();
        if(cursorType === "move"){
            e.target.parentElement.classList.remove('draggedOver')
        }
    }
    function handleDragOver(e){
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDrop(e){
        handleDragLeave(e);
        e.stopPropagation(); //stops event bubbling
        const { target : { parentElement: { dataset: { branch } } }} = e;
        
        addElementAsChild(e.target.parentElement, branch, droppedObj); //target elem, branch of target, elementInObjForm
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

