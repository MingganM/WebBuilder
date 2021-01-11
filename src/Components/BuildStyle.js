import React, { useContext, useState } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { appContext } from "../Context";
// Components:
import Flexbox from "./buildStyle/Flexbox";
import Transform from './buildStyle/Transform';
import Fonts from "./buildStyle/Fonts";
import General from './buildStyle/General';

export default function BuildStyle() {
    const stateObject = {
        showFlexBox: false,
        showGeneral: false,
        showFonts: false,
        showTransform: false
    };

    const context = useContext(appContext);
    const [state, setState] = useState(stateObject);
    const { selectedClass,
            styles,
            handleStyleCheck,
            handleNumberChange,
            handleGeneral } = context;
    
    function toggleSectionsDisplay(section){
        return function(e){
            e.preventDefault(); //stops from submitting the parent form
            const newState = {
                ...state
            }; 
            newState[section] = !state[section]
            
            setState(newState);
        }
    }

    return (
        <form className="buildStyle">
            <h3 className="buildStyle__title">Styles</h3>
            <span className="buildStyle__selectedClass">Selected: {selectedClass}</span>

            <Flexbox 
                show={state.showFlexBox} 
                icons={{FaArrowDown, FaArrowUp}}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleStyleCheck={handleStyleCheck}
            />
            <Transform
                show={state.showTransform}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleNumberChange={handleNumberChange}
            />
            <Fonts
                show={state.showFonts}
                icons={{FaArrowDown, FaArrowUp}}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleNumberChange={handleNumberChange}
            />
            <General
                show={state.showGeneral}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleNumberChange={handleNumberChange}
            />
        </form>
    )
}
