import React, { Component } from 'react';
import { searchForClassParent,
         changeChildrenBranch,
         addElementInRoot,
         deleteFoundElement,
         findObjViaClass } from "./Components/helpingFunctions";

export const appContext = React.createContext();
export const AppConsumer = appContext.Consumer;
// displayContainer
export default class Context extends Component {
    state = {
        elemKey: 1000,
        markup: [],
        styles: {},
        cursorType: 'move',
        selectedClass: {
            classname: "None",
            root: "None"
        }
    };

    setCursor = (e) => {
        const { target : {dataset: { value }}} = e;
        if(value){
            this.setState({
                cursorType: value
            });
        }
    }

    addAttribute = (propVal, realVal) => {
        const { selectedClass: { classname, root }, markup } = this.state;
        let parentElem;

        if(root !== "main"){
            let rootObj = findObjViaClass(markup, root);
            parentElem = searchForClassParent(rootObj, classname);
            parentElem.children.forEach(callback);
        }
        else {
            parentElem = markup;
            parentElem.forEach(callback);
        }

        function callback(obj){
            if(obj.class === classname){
                let newAttributesObj = {...obj.attributes};
                newAttributesObj[propVal] = realVal;
                
                obj.attributes = newAttributesObj;
            }
        }
        this.setState({
            ...this.state,
            markup: [...markup]
        })

    }

    deleteElement = (e) => {
        const { selectedClass, markup } = this.state;
        
        if(selectedClass.classname === "None") return;
        
        if(selectedClass.root === "main"){
            this.setState({
                markup: deleteFoundElement(markup, selectedClass.classname)
            })
        }
        else {
            let branch = findObjViaClass(markup, selectedClass.root);
            deleteFoundElement(searchForClassParent(branch, selectedClass.classname), selectedClass.classname)
            this.setState({
                markup: [...this.state.markup]
            })
        }
    }

    setSelectedClass = (e) => {
        e.stopPropagation();

        const { target: { textContent },
                target: {parentElement: {dataset: { branch }}}
        } = e;
        
        this.setState({
            selectedClass: {
                classname: textContent,
                root: branch
            }
        });
    }

    createElement = (elemClass, elemTag, elemText) => {
        const { elemKey } = this.state;
        
        const element = {
            class: `.${elemClass}`,
            tag: elemTag,
            text: elemTag == "input" ? null : elemText,
            key: elemKey,
            attributes: {},
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
        
        const newElemAsChild = { ...findObjViaClass(foundElem, elemClassName), branch: modifiedBranch};

        changeChildrenBranch(newElemAsChild);

        addElementInRoot(targetClassName, targetElementRoot, newElemAsChild);

        const deletedElem = deleteFoundElement( foundElem, elemClassName );
        
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

        if(selectedClass.classname === "None") return;

        const newStyles = {
            ...styles
        };
        
        if(styles[selectedClass.classname]){
            let newSingleStyle = {
                ...styles[selectedClass.classname],
            };
    
            if(callBack && newSingleStyle[property]) callBack(newSingleStyle); //will run function, to make this compatible with different types of input
            else newSingleStyle[property] = value;
            
            newStyles[selectedClass.classname] = newSingleStyle;
        }
        else{
            newStyles[selectedClass.classname] = {};
            newStyles[selectedClass.classname][property] = value;
        }

        this.setState({
            styles: newStyles
        });
    }

    handleGeneral = (e) => {
        this.registerInputToState(e);
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
            handleNumberChange: this.handleNumberChange,
            deleteElement: this.deleteElement,
            addAttribute: this.addAttribute
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