import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

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
                    return (
                        <div className="display">
                            <div className="display__operations">
                                <span className="display__operation" onClick={showCreationForm}>
                                    <FaPlus></FaPlus>
                                </span>
                
                                <span className="display__operation">
                                    <FaTrash></FaTrash>
                                </span>
                            </div>
                            
                            <div className="display__container">
                                    {
                                        displayElements(value)
                                    }
                            </div>

                            <AddElement createElement={value.createElement} close={closeCreationForm} show={state.showCreationForm}/>
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
        }, obj.text,
        obj.children.length > 0 ? mapObjects(obj.children, createHTMLElement) : null);
    }

    function mapObjects(elemList, callBack) {
        return elemList.map(callBack);
    }

    return mapObjects(markup, createHTMLElement);
}