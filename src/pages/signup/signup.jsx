import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import '../signup/signup.css'
import img from '../../asset/img-google-1.jpg'
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import SignInAxios from "../../Services/userService";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
var regName = /^[A-Z]{1}[a-zA-Z]+$/
const passwordRegex = /^[A-Za-z]\w{6,12}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export default function Signup() {
    const [signUp, setSignUp] = useState({
        FirstName: "", LastName: "", Email: "", Password: "", ConfirmPassword: ""
    })
    const [signUpObjRegex, setSignUpObjRegex] = useState({
        fnameError: false,
        lnameError: false,
        EmailError: false,
        passError: false,
        cpassError: false,
        fnameHelper: "",
        lnameHelper: "",
        EmailHelper: "",
        passHelper: "",
        cpassHelper: "",
    });

    const takeFirstName = (event) => {
        console.log("Fname :-", event.target.value);
        setSignUp((prevState) => ({
            ...prevState, FirstName: event.target.value
        }))
    }

    const takelastName = (event) => {
        console.log("Lname :-", event.target.value);
        setSignUp((prevState) => ({
            ...prevState, LastName: event.target.value
        }))
    }


    const takeEmail = (event) => {
        console.log("Email :-", event.target.value);
        setSignUp((prevState) => ({
            ...prevState, Email: event.target.value
        }))
    }

    const takePassword = (event) => {
        console.log("Password :-", event.target.value);
        setSignUp((prevState) => ({
            ...prevState, Password: event.target.value
        }))
    }

    const takeCPassword = (event) => {
        console.log("CPassword :-", event.target.value);
        setSignUp((prevState) => ({
            ...prevState, ConfirmPassword: event.target.value
        }))
    }

    const submit = async () => {

        let fnameTest = regName.test(signUp.FirstName)
        if (fnameTest) {
            setSignUpObjRegex((prevState) => ({
                ...prevState, fnameError: false, fnameHelper: ""
            }))
        } else {
            setSignUpObjRegex((prevState) => ({
                ...prevState, fnameError: true, fnameHelper: "Enter valid name capital first"
            }))
        }

        let lnameTest = regName.test(signUp.LastName)
        if (lnameTest) {
            setSignUpObjRegex((prevState) => ({
                ...prevState, lnameError: false, lnameHelper: ""
            }))
        } else {
            setSignUpObjRegex((prevState) => ({
                ...prevState, lnameError: true, lnameHelper: "Enter valid name capital first"
            }))
        }

        let EmailTest = emailRegex.test(signUp.Email)
        if (EmailTest) {
            setSignUpObjRegex((prevState) => ({
                ...prevState, EmailError: false, EmailHelper: ""
            }))
        } else {
            setSignUpObjRegex((prevState) => ({
                ...prevState, EmailError: true, EmailHelper: "Enter valid email"
            }))
        }


        let passTest = passwordRegex.test(signUp.Password)
        if (passTest) {
            setSignUpObjRegex((prevState) => ({
                ...prevState, passError: false, passHelper: ""
            }))
        } else {
            setSignUpObjRegex((prevState) => ({
                ...prevState, passError: true, passHelper: "only contain letters..[7-14]"
            }))
        }

        let cpassTest = false
        if (signUp.ConfirmPassword === signUp.Password) {
            cpassTest = true
        } else {
            cpassTest = false
        }

        if (cpassTest) {
            setSignUpObjRegex((prevState) => ({
                ...prevState, cpassError: false, cpassHelper: ""
            }))
        } else {
            setSignUpObjRegex((prevState) => ({
                ...prevState, cpassError: true, cpassHelper: "should match password"
            }))
        }
        if (fnameTest && lnameTest && passTest && EmailTest && cpassTest) {
            console.log("Enter button");
            const response = await SignInAxios(signUp)
            console.log(response);

        }


    }


    return (
        <div className="main-content">
            <div className="con-1">
                <div className="div-1"> Google Image</div>
                <div className="div-2">
                    <h3>Create your Google Account</h3>
                </div>
                <div className="div-2">to continue to Gmail</div>
                <div className="div-3">
                    <TextField onChange={takeFirstName} className="box1" id="outlined-basic" label="FirstName" variant="outlined" size='small' error={signUpObjRegex.fnameError} helperText={signUpObjRegex.fnameHelper} />
                    <div>
                        <TextField onChange={takelastName} className="box1" id="outlined-basic" label="Lastname" variant="outlined" size='small' error={signUpObjRegex.lnameError} helperText={signUpObjRegex.lnameHelper} />
                    </div>
                </div>

                <div className="box2">
                    <TextField onChange={takeEmail} className="box-1" id="outlined-basic" label="Email" variant="outlined" size='small' error={signUpObjRegex.EmailError} helperText={signUpObjRegex.EmailHelper} />
                </div>
                <div className="div-4">You can use letters,numbers & periods</div>
                <div className="div-5">Use my current email instead</div>
                <div className="div-3">
                    <TextField onChange={takePassword} className="box1" id="outlined-basic" label="Password" variant="outlined" size='small' error={signUpObjRegex.passError} helperText={signUpObjRegex.passHelper} />
                    <div>
                        <TextField onChange={takeCPassword} className="box1" id="outlined-basic" label="Confirm password" variant="outlined" size='small' error={signUpObjRegex.cpassError} helperText={signUpObjRegex.cpassHelper} />
                    </div>
                </div>
                <div className="div-6">
                    Use 8 or more characters with a mix of letters, numbers & symbols
                </div>
                <div className="label-1">
                    <Checkbox {...label} /><div>  show password</div>
                </div>
                <div className="div7">
                    <Button variant="text">Sign in instead</Button>
                    <Button onClick={submit} variant="contained">Next</Button>
                </div>
            </div>
            <div className="con-2">
                <div className="con-4">
                    <img className="con-2" src={img} alt="" width="123" height="200" />
                </div>
                <div className="con-3">
                    One account. All of Google working <br></br> for you.
                </div>

            </div>

        </div>
    )
}

