import React, { useState } from 'react';
import { HeadingButton, StyleInput, SetOperationElem } from "./commonComponents";

export default function Border(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange 
    } = props;

    const [state, setState] = useState({unit: "%"});
        
    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="Border"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                <SetOperationElem setState={setState} />

                {/* BORDER STYLE */}
                <StyleInput 
                    label="Border Style All Sides"
                    property="border-style"
                    onChangeFunction={handleGeneral}
                    type="select"
                    optionList={["", "solid", "dotted"]}
                />
                {/* BORDER TOP STYLE */}
                <StyleInput 
                    label="Border Top"
                    property="border-top-style"
                    onChangeFunction={handleGeneral}
                    type="select"
                    optionList={["", "solid", "dotted"]}
                />
                {/* BORDER LEFT STYLE */}
                <StyleInput 
                    label="Border Left"
                    property="border-left-style"
                    onChangeFunction={handleGeneral}
                    type="select"
                    optionList={["", "solid", "dotted"]}
                />
                {/* BORDER RIGHT STYLE */}
                <StyleInput 
                    label="Border Right"
                    property="border-right-style"
                    onChangeFunction={handleGeneral}
                    type="select"
                    optionList={["", "solid", "dotted"]}
                />
                {/* BORDER BOTTOM STYLE */}
                <StyleInput 
                    label="Border Bottom"
                    property="border-bottom-style"
                    onChangeFunction={handleGeneral}
                    type="select"
                    optionList={["", "solid", "dotted"]}
                />

                {/* BORDER WIDTH */}
                <StyleInput 
                    label="Border Width"
                    property="border-width"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                    type="number"
                />

                {/* BORDER COLOR */}
                <StyleInput 
                    label="Border Color"
                    property="border-color"
                    onChangeFunction={handleGeneral}
                    type="color"
                />

                {/* BORDER RADIUS */}
                <StyleInput 
                    label="Border RADIUS"
                    property="border-radius"
                    onChangeFunction={handleNumberChange}
                    type="range"
                    unit={state.unit}
                    rangeOptions={{min:0, max: 100, step: 1}}
                />

            </div>
        </div>
    )
}
