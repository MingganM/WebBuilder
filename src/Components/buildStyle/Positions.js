import React, { useState } from 'react';
import { HeadingButton, StyleInput, SetOperationElem } from "./commonComponents";

export default function Positions(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange 
    } = props;

    const [state, setState] = useState({unit: "%"});

    return (
            <div className="buildStyleSection">
                <HeadingButton
                    title="Positions"
                    onClickFunction={toggleSectionsDisplay}
                    show={show}
                />
                
                <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                    <SetOperationElem
                        setState={setState}
                    />

                    {/* Position */}
                    <StyleInput
                        label="Position"
                        property="position"
                        type="select"
                        onChangeFunction={handleGeneral}
                        optionList={["static", "absolute", "relative", "sticky"]}
                    />

                    {/* LEFT */}
                    <StyleInput
                        label="Left"
                        property="left"
                        type="number"
                        unit={state.unit}
                        onChangeFunction={handleNumberChange}
                    />

                    {/* TOP */}
                    <StyleInput
                        label="Top"
                        property="top"
                        type="number"
                        unit={state.unit}
                        onChangeFunction={handleNumberChange}
                    />
                    
                </div>
            </div>
    )
}
