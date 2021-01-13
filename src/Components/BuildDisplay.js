import React, { useState } from 'react';
import { FaPlus,
        FaTrash,
        FaMousePointer,
        FaArrowsAlt } from 'react-icons/fa';

import { AppConsumer } from "../Context";
import AddElement from "./AddElement";

export default function BuildDisplay() {
   
    const myState = {
        showCreationForm: false
    };
    const [state, setState] = useState(myState);

    function showCreationForm(){
        setState({
            ...state,
            showCreationForm: true
        });
    }
    function closeCreationForm(e){
        e.preventDefault();
        setState({
            ...state,
            showCreationForm: false
        })
    }

    return (
        <AppConsumer>
            {
                value => {
                    const {setCursor, createElement, deleteElement } = value;

                    return (
                        <div className="display">
                            <div onClick={setCursor} className="display__operations">
                                <button className="display__operation" onClick={showCreationForm}>
                                    <FaPlus></FaPlus>
                                </button>
                
                                <button className="display__operation" onClick={deleteElement}>
                                    <FaTrash></FaTrash>
                                </button>

                                <button data-value="select" className="display__operation">
                                    <FaMousePointer></FaMousePointer>
                                </button>

                                <button data-value="move" className="display__operation">
                                    <FaArrowsAlt></FaArrowsAlt>
                                </button>
                            </div>
                            
                            <div id="displayContainer" className="display__container">
                                    {
                                        displayElements(value, true)
                                    }
                            </div>

                            <AddElement createElement={createElement} close={closeCreationForm} show={state.showCreationForm}/>
                        </div>
                    )
                }
            }
                    
        </AppConsumer>
    )
}

export function displayElements(value, applyStyles){
    const { markup, styles } = value;

    function createHTMLElement(obj){
        if(obj.tag === "input" || obj.tag === "img") return React.createElement(
            obj.tag,
            applyStyles ?
            {
                style: {...styles[obj.class]},
                key: obj.key
            } : {
               key: obj.key,
               class: obj.class.slice(1)
            }
        );

        return React.createElement(
            obj.tag, 
            applyStyles ?
            {
                style: {...styles[obj.class]},
                key: obj.key
            } : {
               key: obj.key,
               class: obj.class.slice(1)
            },
            obj.text,
            obj.children.length > 0 ? mapObjects(obj.children, createHTMLElement) : null
        );
    }

    function mapObjects(elemList, callBack) {
        return elemList.map(callBack);
    }

    return mapObjects(markup, createHTMLElement);
}