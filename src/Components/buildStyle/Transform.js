import React, { useState } from 'react';
import { HeadingButton, StyleInput } from "./commonComponents";

export default function Transform(props) {
    const { toggleSectionsDisplay,
            show,
            handleNumberChange } = props;

    const [state, setState] = useState({unit: "%"});

    function setOperationUnit(e){ //sets unit to px or %
        const {target: { value }} = e;
        setState({
            unit: value
        })
    }

    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="Transform"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                <div className="buildStyleSection__singleProperty">
                    <label>Operation Unit:</label>
                    <select onChange={setOperationUnit} data-value="" data-property="" className="buildStyleSection__select">
                        <option value="%">%</option>
                        <option value="px">px</option>
                    </select>
                </div>

                {/* TRANSLATE: X AND Y */}
                <StyleInput 
                    type="number"
                    unit={state.unit}
                    label="TranslateX"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="translateX"
                />
                <StyleInput 
                    type="number"
                    unit={state.unit}
                    label="TranslateY"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="translateY"
                />

                {/* SKEW: X AND Y */}
                <StyleInput 
                    type="number"
                    unit="deg"
                    label="SkewX"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="skewX"
                />

                <StyleInput 
                    type="number"
                    unit="deg"
                    label="SkewY"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="skewY"
                />

                {/* SCALE: X AND Y */}
                <StyleInput 
                    type="number"
                    unit=""
                    label="Scale"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="scale"
                />

                {/* Rotate: X AND Y */}
                <StyleInput 
                    type="number"
                    unit="deg"
                    label="Rotate"
                    onChangeFunction={handleNumberChange}
                    property="transform"
                    dataFunc="rotate"
                />

            </div>
        </div>
    )
}
