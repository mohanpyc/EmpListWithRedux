import React from 'react'
import Data from './Data'
import Formui from './Formui'

const App=()=> {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-lg-6">
                        <Formui  />
                    </div>
                    <div className="col-xs-6 col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 mr-0 pr-0">
                                <button className="btn btn-danger w-100 mr-0" >Grid View</button>
                            </div>
                            <div className="col-lg-6 ml-0 pl-0">
                                <button className="btn btn-primary w-100 ml-0" >Tile View</button>
                            </div>
                        </div>  
                        <Data />
                    </div>
                </div>
            </div>
         );
}

export default App
