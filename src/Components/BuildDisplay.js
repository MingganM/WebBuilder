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
                    const {setCursor, createElement} = value;
                    return (
                        <div className="display">
                            <div onClick={setCursor} className="display__operations">
                                <button className="display__operation" onClick={showCreationForm}>
                                    <FaPlus></FaPlus>
                                </button>
                
                                <button className="display__operation">
                                    <FaTrash></FaTrash>
                                </button>

                                <button data-value="select" className="display__operation">
                                    <FaMousePointer></FaMousePointer>
                                </button>

                                <button data-value="move" className="display__operation">
                                    <FaArrowsAlt></FaArrowsAlt>
                                </button>
                            </div>
                            
                            <div className="display__container">
                                    {
                                        displayElements(value)
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

function displayElements(value){
    const { markup, styles } = value;

    function createHTMLElement(obj){
        if(obj.tag === "input" || obj.tag === "img") return React.createElement(
            obj.tag,
            {
                style: {...styles[obj.class]},
                key: obj.key
            }
        );

        return React.createElement(
            obj.tag, {
            style: {...styles[obj.class]},
            key: obj.key
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