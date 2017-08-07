import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Paper,TextField,RaisedButton} from 'material-ui/Paper';
import {Row,Col} from 'react-flexbox-grid';
import {blueGrey100} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Route from './../../congifroute/routes.js';

const style = {
                        paperstyle : {margin: '80px',textAlign : 'center',
                        backgroundColor : blueGrey100},
                        raisedstyle : {margin : '12'}
                    }

class Signup extends React.Component
{
     constructor()
    {
        super();
        this.state = {firstname : "",lastname : "",password : "",email : ""};
    }
        handleFnameChange(e)
    {
        var firstname = e.target.value;
        this.setState({firstname : firstname});
    }
    handleLnameChange(e)
    {
        var lastname = e.target.value;
        this.setState({lastname : lastname});
    }
    handleEmailChange(e)
    {
        var email = e.target.value;
        this.setState({email : email});
    }
    handlePasswordChange(e)
    {
        var password = e.target.value;
        this.setState({password : password});
    }

    handleregister()
    {
        if(this.state.email.length == 0 || this.state.password.length == 0)
        {
            alert("email or password field should not be empty");
        }
        else
        {
            $.ajax({
                url : Route.signup,
                type : 'POST',
                data : {
                    firstname : this.state.firstname,
                    lastname : this.state.lastname,
                    username : this.state.email,
                    password : this.state.password
                },
                success : function(response)
                {
                    alert("successfully registered");
                },
                error : function(err)
                {
                    alert("error in signup");
                }
            })
        }
    } 
    render()
    {
        return(
        <div>
         <Row around='xs'>
                    <Col center='xs' xs = {8} md = {6}>
                        <Paper style = {style.paperstyle} zDepth={4}>
        <h1>HI</h1>
         </Paper>
                    </Col>
                </Row>
        
        </div>
        );
    }

}
export default Signup;
