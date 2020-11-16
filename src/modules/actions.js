export const insertEmp = (item)=>{
    console.log(item)
    return {
        type:"CREATE_EMP",
        payload:item
    }
}

export const removeEmp = (item) =>{
    return {
        type:"DELETE_EMP",
        payload:item
    }
}