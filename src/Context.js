import React, { Component } from 'react';
import { searchForClassParent,
         changeChildrenBranch,
         addElementInRoot,
         findObjViaClass } from "./Components/helpingFunctions";

export const appContext = React.createContext();
export const AppConsumer = appContext.Consumer;

export default class Context extends Component {
    state = {
        elemKey: 1000,
        markup: [
            {
                class: `.c1`,
                tag: 'h2',
                text: 'h2',
                key: 1000,
                branch: "main",
                children: [
                    {
                        class: `.c3`,
                        tag: 'div',
                        text: 'div',
                        key: 1003,
                        branch: ".c1",
                        children: [
                            {
                                class: `.c4`,
                                tag: 'div',
                                text: 'div',
                                key: 1004,
                                branch: ".c1",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                class: `.c2`,
                tag: 'div',
                text: 'div',
                key: 1001,
                branch: "main",
                children: []
            }
        ],
        styles: {},
        cursorType: 'move',
        selectedClass: "None"
    };

    setCursor = (e) => {
        const { target : {dataset: { value }}} = e;
        if(value){
            this.setState({
                cursorType: value
            });
        }
    }

    setSelectedClass = (e) => {
        e.stopPropagation();
        const { target: { textContent } } = e;
        this.setState({
            selectedClass: textContent
        });
    }

    createElement = (elemClass, elemTag, elemText) => {
        const { elemKey } = this.state;
        
        const element = {
            class: `.${elemClass}`,
            tag: elemTag,
            text: elemTag == "input" ? null : elemText,
            key: elemKey,
            branch: "main",
            children: []
        }
        
        this.setState({
            elemKey: elemKey + 1,
            markup: [...this.state.markup, element]
        });
    }

    addElementAsChild = (target, branch, elem) => {
        const { markup, cursorType } = this.state;
        if(cursorType !== 'move') return;

        const targetClassName = target.dataset.classname;
        const elemClassName= elem.dataset.classname;

        if(targetClassName === elemClassName) return; //doesn't allow target to be dropped on itself
        if(elem.parentElement.dataset.classname === targetClassName) return; //doesn't allow target to be dropped on its parent
        
        const modifiedBranch = branch === "main" ? targetClassName : branch;
        const targetElementRoot = markup.find(obj => obj.class === modifiedBranch);

        // THIS PIECE OF CODE WILL FIND ELEMENT THAT IS TO BE DROPPED AS CHILD:
        
        const { dataset: { branch: elemBranch } } = elem;
        
        // checks if element is from main branch:
        let foundElem = elemBranch === "main" ? markup : null;

        if(!foundElem){ //if element is not from a main branch
            foundElem = searchForClassParent(findObjViaClass(markup, elemBranch), elemClassName)
        }

        // END OF ELEM THAT IS TO BE DROPPED AS A CHILD

        function deleteFoundElement( root ){ //root = foundElement
            if(!root) return;

            if(root.children) {
                root.children = root.children.filter(obj => obj.class !== elemClassName);
                return;
            }

            root = root.filter(obj => obj.class !== elemClassName);
            return root;
        }
        
        const newElemAsChild = { ...findObjViaClass(foundElem, elemClassName), branch: modifiedBranch};

        changeChildrenBranch(newElemAsChild);

        addElementInRoot(targetClassName, targetElementRoot, newElemAsChild);

        const deletedElem = deleteFoundElement( foundElem );
        
        this.setState({
            markup: deletedElem ? deletedElem : [...markup]
        })
    }

    handleNumberChange = (e) => {
        const { selectedClass, styles } = this.state;
        let {target : { value },
             target : { dataset : { property, func, unit } }} = e;
        
        if( func ){
            value = `${func}(${value}${unit})`;
        }else{
            value = `${value}${unit}`;
        }

        function findEndIndex(string, startIndex){
            let resultIndex;
            for(let i = startIndex; i < string.length; i++){
                if(string[i] === ")") {
                    resultIndex = i + 1;
                    break;
                }
            }
            return resultIndex;
        }
        function callBack(newSingleStyle){
            const stylePropertyIndex = newSingleStyle[property].indexOf(func); 
            const stylePropertyEndIndex = findEndIndex(newSingleStyle[property], stylePropertyIndex);
            const existingStyleProperty = newSingleStyle[property].slice(stylePropertyIndex, stylePropertyEndIndex);

            if(newSingleStyle[property] && stylePropertyIndex !== -1) newSingleStyle[property] = newSingleStyle[property].replace(existingStyleProperty, value); 
            else if(newSingleStyle[property] && func) newSingleStyle[property] += " " + value;
            else newSingleStyle[property] = value;
        }

        this.registerInputToState(e, value, callBack);
    }

    handleStyleCheck = (e) => {
        let { target: { checked, dataset: { value } } } = e;
    
        if(!checked) value = ""; 
        
        this.registerInputToState(e, value);
    }

    registerInputToState = (e, extraVal, callBack) => {
        const { selectedClass, styles } = this.state;
        let {target : { value },
             target : { dataset : { property } }} = e;
    
        if(typeof extraVal !== "undefined" && extraVal !== null) {
            value = extraVal; 
        }

        if(selectedClass === "None") return;

        const newStyles = {
            ...styles
        };
        
        if(styles[selectedClass]){
            let newSingleStyle = {
                ...styles[selectedClass],
            };
    
            if(callBack && newSingleStyle[property]) callBack(newSingleStyle); //will run function, to make this compatible with different types of input
            else newSingleStyle[property] = value;
            
            newStyles[selectedClass] = newSingleStyle;
        }
        else{
            newStyles[selectedClass] = {};
            newStyles[selectedClass][property] = value;
        }

        this.setState({
            styles: newStyles
        });
    }

    handleGeneral = (e) => {
        this.registerInputToState(e);
    }
    handleColor = (e) => {

    }

    render(){
        const value = {
            ...this.state,
            createElement: this.createElement,
            addElementAsChild: this.addElementAsChild,
            setCursor: this.setCursor,
            setSelectedClass: this.setSelectedClass,
            handleGeneral: this.handleGeneral,
            handleStyleCheck: this.handleStyleCheck,
            handleNumberChange: this.handleNumberChange
        }
        
        return (
            <appContext.Provider value={value}>
                {
                    this.props.children
                }
            </appContext.Provider>
        );
    }
}