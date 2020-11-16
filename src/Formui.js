import React,{useState} from 'react';
import { connect } from 'react-redux';
import { insertEmp } from './modules/actions';

function Formui(props) {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [phNum,setPhNum]=useState("");


    const updateState = (e)=>{
        e.preventDefault();
       if(fname!="" & lname!="" & phNum!=""){
           console.log(props)
        let emp={fname,lname,phNum}
        props.insertEmp(emp);

        
        setPhNum("")
        setFname("")
        setLname("")
       }
        
    }

    return (
        <div>
             <form onSubmit={updateState}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={(e)=>{setFname(e.target.value)}} value={fname} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={(e)=>{setLname(e.target.value)}}  value={lname} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input onChange={(e)=>{setPhNum(e.target.value)}} value={phNum} className="form-control" />
                    </div>
                        <button className="btn btn-primary" onClick={updateState}>Submit</button>
                    </form>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        empList:state.empList
    };
}


export default connect(mapStateToProps,{insertEmp})(Formui);
