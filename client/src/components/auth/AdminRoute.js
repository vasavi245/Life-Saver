import React,{Component} from 'react';
import API from "../utils/API";
import Dashboard from "../pages/Dashboard";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";


export default class AdminRoute extends Component {
  
    componentDidMount() {
        API.getAdmin()
        .then((res) => {
            console.log(res.data);
      
        })
   
    }

    render() {
     
            return(
                <div>
                    
                </div>
            )
       
    }
}