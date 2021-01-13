import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function HeadingButton (props) {
    const {
        title,
        onClickFunction,
        show
    } = props;

    return (
        <button className="buildStyleSection__btn" onClick={onClickFunction("show" + title)}>
            <h2 className="buildStyleSection__title">
                { title }
                {show ? <FaArrowUp /> : <FaArrowDown />}
            </h2>
        </button>
    )
} 

export function StyleInput(props){
    const {
        type,
        label,
        dataValue,
        onChangeFunction,
        property,
        unit,
        dataFunc,
        optionList,
        rangeOptions
    } = props

    switch(type){
        case "select":
            return (
                <div className="buildStyleSection__singleProperty">
                    <label htmlFor={label}>{label}:</label>
                    <select id={label} onChange={onChangeFunction} data-property={property} className="buildStyleSection__input">
                        {
                            optionList.map(option => (
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>
                </div>
            )
        case "range":
            return(
                <div className="buildStyleSection__singleProperty">
                    <label htmlFor={label}>{label}:</label>
                    <input 
                        min={rangeOptions.min}
                        max={rangeOptions.max}
                        step={rangeOptions.step}
                        onChange={onChangeFunction}
                        id={label}
                        type="range"
                        data-unit={unit !== undefined ? unit : undefined }
                        data-property={property}
                        className="buildStyleSection__input"
                        defaultValue="0"
                    />
                </div>
            )
        default :
            return (
                <div className="buildStyleSection__singleProperty">
                    <label htmlFor={label}>{label}:</label>
                    <input 
                        onChange={onChangeFunction} 
                        id={label} 
                        type={type}
                        data-value={dataValue !== undefined ? dataValue : undefined} 
                        data-unit={unit !== undefined ? unit : undefined } 
                        data-func={dataFunc ? dataFunc : undefined} 
                        data-property={property} 
                        className="buildStyleSection__input"
                    />
                </div>
            );
    }
}

export function setOperationUnit(setState){ //sets unit to px or %
    return function(e){
        const {target: { value }} = e;
        setState({
            unit: value
        })
    }
}
export function SetOperationElem({setState}){
    return (
        <div className="buildStyleSection__singleProperty">
            <label>Operation Unit:</label>
            <select onChange={setOperationUnit(setState)} className="buildStyleSection__select">
                <option value="%">%</option>
                <option value="px">px</option>
            </select>
        </div>
    );
}