import React, { Component } from 'react';

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
        styles: {}
    };

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
        const { markup } = this.state;
        const targetTextContent = target.textContent;
        const elemTextContent= elem.textContent;
        
        const modifiedBranch = branch === "main" ? targetTextContent : branch;
        const targetElementRoot = markup.find(obj => obj.class === modifiedBranch);
        
        let foundElem = markup.find(obj => obj.class === elemTextContent);

        if(!foundElem){ //if element is not from a main branch
            const { dataset: { branch } } = elem;
            foundElem = searchForClassParent(markup.find(obj => obj.class === branch), elemTextContent)
        }
        console.log(foundElem);

        function searchForClassParent(branch, className){
            const { children } = branch;
            let resultChild;
            
            if(children.length > 0){
                children.forEach(obj => {
                    if(obj.class === className) resultChild = branch;
                });
                if(!resultChild){
                    for(let i = 0; i < children.length; i++){
                        resultChild = searchForClassParent(children[i], className);
                        if(resultChild) break;
                    }
                }
            }

            return resultChild;
        }

        // addElementInRoot(targetTextContent, elementRoot, newElemAsChild);
        const newElemAsChild = { ...foundElem, branch: modifiedBranch};
        
        
        function addElementInRoot(className, elementRoot, elemAsChild){
            if(elementRoot.class === className){
                elementRoot.children.push(elemAsChild);
            }
            console.log(elementRoot, className, elemAsChild)
            elementRoot.children.forEach(obj => {
                // addElementInRoot(className, obj, elemAsChild)
            });
        }

        console.log(newElemAsChild);
        console.log(elem);
        

        // const newMarkup = markup.map();
    }

    render(){
        const value = {
            ...this.state,
            createElement: this.createElement,
            addElementAsChild: this.addElementAsChild
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