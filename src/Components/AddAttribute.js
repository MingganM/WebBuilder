import React, { useRef } from 'react';

export default function AddAttribute(props) {
    const { close, show, addAttribute } = props;
    const elemProp = useRef(null);
    const elemValue = useRef(null);

    function handleAddAttribute(e){
        e.preventDefault();
        const {current: { value: propVal }} = elemProp;
        const {current: { value: realVal }} = elemValue;
        
        addAttribute(propVal, realVal);

        elemProp.current.value = "";
        elemValue.current.value = "";
        
        close(e);
    }

    return (
        <form onSubmit={handleAddAttribute} className={show ? "addElement addElement--show" : "addElement"}>
            <button className="addElement__btn addElement--close" onClick={close}>
                X
            </button>

            <label htmlFor="elemClass" className="elemClass">
                Attribute Property:
                <input ref={elemProp} required type="text" id="elemClass" />
            </label>
            <label htmlFor="elemTag" className="elemTag">
                Attribute Value:
                <input ref={elemValue} required type="text" id="elemTag" />
            </label>

            <button className="addElement__btn">Add Attribute</button>
        </form>
    )
}
