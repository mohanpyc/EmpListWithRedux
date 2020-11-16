import React from 'react'
import { connect } from 'react-redux';
import {removeEmp} from './modules/actions'

function Data(props) {

  const remov=(index)=>{
    props.removeEmp(index);
  }

  const item=props.empList.map((emp,index)=>{
     return <tr key={index}>
                
                <td className="text-center text-info">{emp.fname}</td>
                <td className="text-center text-info">{emp.lname}</td>
                <td className="text-center text-primary">{emp.phNum}</td>
                <td className="text-center text-danger"> <i className="fa fa-trash" onClick={()=>remov(emp)}> </i> </td>
            </tr>
    })

    return (
          <div>
             <table className="table">
            <tbody>
              {item}
            </tbody>
            </table>
            
          </div>
            
    );
}
const mapStateToProps=(state)=>{
  return {
      empList:state.empList
  };
}

export default connect(mapStateToProps,{removeEmp})(Data);
