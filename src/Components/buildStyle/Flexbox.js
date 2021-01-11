import React from 'react';
import { HeadingButton, StyleInput } from "./commonComponents";

export default function Flexbox(props) {
    const { toggleSectionsDisplay,
            show,
            handleGeneral,
            handleStyleCheck,
            icons } = props;

    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="FlexBox"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                {/* DISPLAY FLEX : CHECKBOX */}
                <StyleInput
                    label="Display: Flex"
                    type="checkbox"
                    property="display"
                    onChangeFunction={handleStyleCheck}
                    dataValue="flex"
                />

                {/* FLEX-WRAP: CHECKBOX */}
                <StyleInput
                    label="Flex-Wrap"
                    type="checkbox"
                    property="flex-wrap"
                    onChangeFunction={handleStyleCheck}
                    dataValue="wrap"
                />
                
                {/* FLEX-DIRECTION : SELECT */}
                <StyleInput
                    label="Flex-Direction"
                    type="select"
                    property="flex-direction"
                    optionList={["row", "row-reverse", "column", "column-reverse"]}
                    onChangeFunction={handleGeneral}
                />

                {/* JuSTIFY-CONTENT : SELECT */}
                <StyleInput
                    label="Justify-Content"
                    type="select"
                    property="justify-content"
                    optionList={["flex-start", "space-between", "space-around", "space-evenly", "center", "flex-end"]}
                    onChangeFunction={handleGeneral}
                />

                {/* ALIGN-ITEMS : SELECT */}
                <StyleInput
                    label="Align-Items"
                    type="select"
                    property="align-items"
                    optionList={["flex-start", "space-between", "space-around", "space-evenly", "center", "flex-end"]}
                    onChangeFunction={handleGeneral}
                />

            </div>
        </div>
    )
}
