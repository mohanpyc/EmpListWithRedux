

const initialState={
    empList:[]
}

function reducers(state=initialState,action){
    if(action.type==="CREATE_EMP"){
        console.log(action)
        return {
            empList:[...state.empList,action.payload]
        }
    }else if(action.type==="DELETE_EMP"){
        console.log([...state.empList.filter(i=>i!=action.payload.phNum)],action.payload.phNum)
        return {
            empList:[...state.empList.filter(i=>i.phNum!==action.payload.phNum)]
        }
    }else{
        return state;
    }
}

export default reducers;