import React from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { SignInAxiosGet } from "../../Services/userService";
import "./sign.css"
import { useState } from "react";
const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PasswordRegex = /^[A-Za-z0-9]\w{6,12}$/;
export default function Signin() {
    const [sigIn, setSignIn] = useState({
        Email: "",
        Password: ""
    })
    const [signInObjRegex, setSignInObjRegex] = React.useState({
        EmailError: false,
        passError: false,
        EmailHelper: "",
        passHelper: "",
    });

    const takeEmail = (event) => {
        console.log("Email :-", event.target.value);
        setSignIn((prevState) => ({
            ...prevState, Email: event.target.value
        }))
    }

    const takePassword = (event) => {
        console.log("Password :-", event.target.value);
        setSignIn((prevState) => ({
            ...prevState, Password: event.target.value
        }))
    }
    const submit = async () => {
       
        let EmailTest = EmailRegex.test(sigIn.Email)
        if (EmailTest) {
            setSignInObjRegex((prevState)=>({
               ...prevState,EmailError:false,EmailHelper:"" 
            }))
        }else{
            setSignInObjRegex((prevState)=>({
                ...prevState,EmailError:true,EmailHelper:"Enter valid Email" 
             }))
        }
        let passTest = PasswordRegex.test(sigIn.Password)
        if (passTest) {
            setSignInObjRegex((prevState)=>({
               ...prevState,passError:false,passHelper:"" 
            }))
        }else{
            setSignInObjRegex((prevState)=>({
                ...prevState,passError:true,passHelper:"Password must contain a small,caps only with limit 7-14 ." 
             }))
        }
        if (EmailTest && passTest) {
            const reponse = await SignInAxiosGet(sigIn);
            localStorage.setItem('token',reponse.data.data)
            console.log(reponse);
          }
        
    }

    return (
        <div className="body1">
            <div className="divs">
                <div className="div1">GoogleImage</div>
                <div className="div2"><h3>Sign in</h3></div>
                <div className="div3">to continue to Gmail</div>
            </div>
            <div className="box-logins">
                <TextField onChange={takeEmail} id="outlined-basic" label="Email" variant="outlined" size='small'  error={signInObjRegex.EmailError} helperText={signInObjRegex.EmailHelper}/>
            </div>
            <div className="box-logins1">
                <TextField onChange={takePassword} id="outlined-basic" label="Password" variant="outlined" size='small' error={signInObjRegex.passError} helperText={signInObjRegex.passHelper} />
            </div>
            <div className="div4"><h3>Forgot Email?</h3></div>
            <div className="empdiv"></div>
            <div className="div5">
                <div className="button-1">
                    <Button className="button-1" variant="text">Create account</Button>
                </div>
                <Button onClick={submit}  variant="contained">Login</Button>
            </div>
        </div>
    )



}