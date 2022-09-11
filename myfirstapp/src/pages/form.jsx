import React, { Component, useState } from 'react';
import Button from '../components/button';
import TextBox from '../components/textbox';
import style from './form.css'

const Form = (props) => {
        const [password, setPassword] = useState("")
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [phone_number, setPhonenumber] = useState()

        const submitHandler = (e) => {
            e.preventDefault()

            if (email === 'abc@mail.com' && password === '1234') {
                    alert("Success")
            } else {
                alert('Invalid email or password')
            }
        }

        function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}



        return (
            <form onSubmit={submitHandler}>
                <TextBox name='name' label='Name' type='name' value={name} onChangeHandler={setName}/>
                <TextBox name='phone_number' label='Phonenumber' type='tel'  value={phone_number} onChangeHandler={setPhonenumber}/>
                <TextBox name='email_address' label='Email' type='name'  value={email} onChangeHandler={setEmail}/>
                <TextBox name='password' label='Password' type='password'  value={password} onChangeHandler={setPassword}/>
                <Button type='submit' name='Submit'/>
            </form>
        );
}

export default Form;