import React from 'react';
import { HeadingButton } from "./commonComponents";

export default function General(props) {
    const { toggleSectionsDisplay,
        show,
        handleGeneral,
        handleNumberChange } = props;

    return (
        <div className="buildStyleSection">
            <HeadingButton
                title="General"
                onClickFunction={toggleSectionsDisplay}
                show={show}
            />

            <div className={(show ? "" : "hide") + " buildStyleSection__content"}>

                

            </div>
        </div>
    )
}
