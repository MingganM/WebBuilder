import React from 'react';
import { HeadingButton, StyleInput } from "./commonComponents";

export default function Fonts(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange } = props;

    return (
        <div className="buildStyleSection">
            <HeadingButton 
                title="Fonts"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>

                {/* COLOR */}
                <StyleInput 
                    label="Color"
                    type="color"
                    onChangeFunction={handleGeneral}
                    property="color"
                />

                {/* FONT SIZE */}
                <StyleInput 
                    label="Font Size"
                    type="number"
                    onChangeFunction={handleNumberChange}
                    property="font-size"
                    unit="px"
                />

                {/* FONT WEIGHT */}
                <StyleInput 
                    label="Font Weight"
                    type="range"
                    onChangeFunction={handleGeneral}
                    property="font-weight"
                    unit=""
                    rangeOptions={{min: 100, max: 1000, step: 100}}
                />

                {/* TEXT ALIGN */}
                <StyleInput 
                    label="Text Align"
                    type="select"
                    onChangeFunction={handleGeneral}
                    property="text-align"
                    optionList={["left", "right", "center", "justify"]}
                />

                {/* TEXT DECORATION */}
                <StyleInput 
                    label="Text Decoration"
                    type="select"
                    onChangeFunction={handleGeneral}
                    property="text-decoration"
                    optionList={["None", "underline", "overline", "line-through"]}
                />

                {/* TEXT TRANSFORM */}
                <StyleInput 
                    label="Text Transform"
                    type="select"
                    onChangeFunction={handleGeneral}
                    property="text-transform"
                    optionList={["None", "capitalize", "uppercase", "lowercase"]}
                />

                {/* LETTER SPACING */}
                <StyleInput 
                    label="Letter Spacing"
                    type="range"
                    unit="px"
                    onChangeFunction={handleNumberChange}
                    property="letter-spacing"
                    rangeOptions={{step: 0.1, min: 0, max: 100}}
                />

                {/* WORD SPACING */}
                <StyleInput 
                    label="Word Spacing"
                    type="range"
                    unit="px"
                    onChangeFunction={handleNumberChange}
                    property="word-spacing"
                    rangeOptions={{step: 0.1, min: 0, max: 100}}
                />

                {/* FONT STYLE */}
                <StyleInput 
                    label="Font Style"
                    type="select"
                    onChangeFunction={handleGeneral}
                    property="font-style"
                    optionList={["normal", "oblique", "italic"]}
                />

            </div>
        </div>
    )
}