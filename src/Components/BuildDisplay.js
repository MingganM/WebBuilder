import React, { useState } from 'react';
import { FaPlus,
        FaTrash,
        FaMousePointer,
        FaArrowsAlt } from 'react-icons/fa';

import { AppConsumer } from "../Context";
import AddElement from "./AddElement";
import AddAttribute from './AddAttribute';

export default function BuildDisplay() {
   
    const myState = {
        showCreationForm: false,
        showAttributeForm: false
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
    function showAttributesForm(){
        setState({
            ...state,
            showAttributeForm: true
        });
    }
    function closeAttributesForm(e){
        e.preventDefault();

        setState({
            ...state,
            showAttributeForm: false
        });
    }

    return (
        <AppConsumer>
            {
                value => {
                    const {setCursor, createElement, deleteElement, addAttribute } = value;

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

                                <button className="display__operation" onClick={showAttributesForm}>
                                    Add Attribute
                                </button>
                            </div>
                            
                            <div id="displayContainer" className="display__container">
                                    {
                                        displayElements(value, true)
                                    }
                            </div>

                            <AddElement createElement={createElement} close={closeCreationForm} show={state.showCreationForm}/>

                            <AddAttribute addAttribute={addAttribute} close={closeAttributesForm} show={state.showAttributeForm}/>
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
                key: obj.key,
                ...obj.attributes
            } : {
               key: obj.key,
               class: obj.class.slice(1),
               ...obj.attributes
            }
        );

        return React.createElement(
            obj.tag, 
            applyStyles ?
            {
                style: {...styles[obj.class]},
                key: obj.key,
                ...obj.attributes
            } : {
               key: obj.key,
               class: obj.class.slice(1),
               ...obj.attributes
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