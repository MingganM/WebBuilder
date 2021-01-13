import React from 'react';
import { HeadingButton, StyleInput } from './commonComponents';

export default function Background(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange 
    } = props;

    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="Background"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>
                {/* Background Color */}
                <StyleInput 
                    label="Background Color"
                    property="background-color"
                    type="color"
                    onChangeFunction={handleGeneral}
                />

                {/* Background Image */}
                <StyleInput 
                    label="Background Image"
                    property="background-image"
                    type="text"
                    dataFunc="url"
                    onChangeFunction={handleNumberChange}
                />
                
                {/* Background Repeat */}
                <StyleInput 
                    label="Background Repeat"
                    property="background-repeat"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["repeat", "no-repeat", "repeat-x", "repeat-y"]}
                />

                {/* Background Position */}
                <StyleInput 
                    label="Background Position"
                    property="background-position"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["initial", "left top", "right top", "left bottom", "right bottom", "left", "top", "right", "center", "bottom"]}
                />

                {/* Background Attachment */}
                <StyleInput 
                    label="Background Attachment"
                    property="background-attachment"
                    type="select"
                    onChangeFunction={handleGeneral}
                    optionList={["initial", "fixed", "scroll", "local"]}
                />

            </div>
        </div>
    )
}
