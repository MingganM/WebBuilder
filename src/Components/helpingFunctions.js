export function searchForClassParent(branch, className){
    const { children } = branch;
    let resultChild;
    
    if(children.length > 0){
        children.forEach(obj => {
            if(obj.class === className) resultChild = branch;
        });
        if(!resultChild){
            for(let i = 0; i < children.length; i++){
                console.log(children[i]);
                resultChild = searchForClassParent(children[i], className);
                if(resultChild) break;
            }
        }
    }

    return resultChild;
}

export function changeChildrenBranch(elemAsObj){
    elemAsObj.children.forEach(obj => {
        obj.branch = elemAsObj.branch;
    });

    elemAsObj.children.forEach(obj => changeChildrenBranch(obj));
}

export function addElementInRoot(className, elementRoot, elemAsChild){
    if(elementRoot.class === className){
        elementRoot.children = [...elementRoot.children, elemAsChild];
        return true;
    }
    
    for(let i = 0; i < elementRoot.children.length; i++){                
        if(addElementInRoot(className, elementRoot.children[i], elemAsChild)) break;
    }
    return false;
}

export function findObjViaClass(list, className){
    if(!list) return;

    if(list.filter){ //if list is array
        return list.find(obj => obj.class === className);
    }
    return list.children.find(obj => obj.class === className)
}