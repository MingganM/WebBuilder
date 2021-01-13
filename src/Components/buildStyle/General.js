import React, { useState } from 'react';
import { HeadingButton, StyleInput, SetOperationElem } from "./commonComponents";

export default function General(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange 
    } = props;

    const [state, setState] = useState({unit: "%"});

    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="General"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                {/* SETTING UNIT */}
                <SetOperationElem setState={setState} />

                {/* PADDING: */}
                <StyleInput 
                    label="Padding"
                    property="padding"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* MARGIN */}
                <StyleInput
                    label="Margin"
                    property="margin"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* DISPLAY */}
                <StyleInput
                    label="Display"
                    property="display"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["", "block", "inline-block", "inline"]}
                />

                {/* MIN-HEIGHT */}
                <StyleInput
                    label="Min Height"
                    property="min-height"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* MAX-HEIGHT */}
                <StyleInput
                    label="Max Height"
                    property="max-height"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* MIN-WIDTH */}
                <StyleInput
                    label="Min Width"
                    property="min-width"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* MAX-WIDTH */}
                <StyleInput
                    label="Max Width"
                    property="max-width"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    unit={state.unit}
                />

                {/* Opacity */}
                <StyleInput
                    label="Opacity"
                    property="opacity"
                    type="range"
                    onChangeFunction={handleGeneral}
                    rangeOptions={{min: 0, max: 1, step: 0.1}}
                />

                {/* VISIBILITY */}
                <StyleInput
                    label="Visibility"
                    property="visibility"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["visible", "hidden", "collapse"]}
                />

                {/* LIST STYLE TYPE */}
                <StyleInput
                    label="List Style"
                    property="list-style-type"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["circle", "none", "lower-roman", "upper-roman", "cjk-ideographic", "georgian", "decimal-leading-zero", "disc", "square", "armenian", "decimal", "hebrew", "katakana", "hiragana"]}
                />

                {/* OVERFLOW */}
                <StyleInput
                    label="Overflow"
                    property="overflow"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["visible", "hidden", "scroll", "auto"]}
                />

            </div>
        </div>
    )
}
