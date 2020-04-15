import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div class="OuterBox">
                <h2>Login Form</h2>

                <form action="/action_page.php" method="post">
                    <div class="imgcontainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJEsnc3Aj40igd4dGoOy-mJrgLfZVAZ23JabcyW-7lJTiwMowj" alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit" class="button-form">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container">
                        <button type="button" class="button-form cancelbtn">Cancel</button>
                        <span class="psw"><a href="#">Forgot password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;