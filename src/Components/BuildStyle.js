import React, { useContext, useState } from 'react';
import { appContext } from "../Context";
// Components:
import Flexbox from "./buildStyle/Flexbox";
import Transform from './buildStyle/Transform';
import Fonts from "./buildStyle/Fonts";
import General from './buildStyle/General';
import Positions from './buildStyle/Positions';
import Border from './buildStyle/Border';
import Background from './buildStyle/Background';

export default function BuildStyle() {
    const stateObject = {
        showFlexBox: false,
        showGeneral: false,
        showFonts: false,
        showTransform: false,
        showPositions: false,
        showBorder: false,
        showBackground: false
    };

    const context = useContext(appContext);
    const [state, setState] = useState(stateObject);
    const { selectedClass,
            styles,
            handleStyleCheck,
            handleNumberChange,
            handleGeneral 
        } = context;
    
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
            <span className="buildStyle__selectedClass">Selected: {selectedClass.classname}</span>

            <Flexbox 
                show={state.showFlexBox} 
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
            <Positions 
                show={state.showPositions}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleNumberChange={handleNumberChange}
            />
            <Border
                show={state.showBorder}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleNumberChange={handleNumberChange} 
            />
            <Background 
                show={state.showBackground}
                toggleSectionsDisplay={toggleSectionsDisplay}
                handleGeneral={handleGeneral}
                handleNumberChange={handleNumberChange} 
            />

        </form>
    )
}
