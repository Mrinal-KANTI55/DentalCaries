import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const PreviousLocation = location.state?.from || '/home';
    const { user, signOutButton, userSignIn, userCreateAnAccount, googleSignUp } = useAuth();

    const [emails, setEmail] = useState('');
    const [passwords, setPassword] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const useGoogleLogInHandel = () => {
        googleSignUp()
            .then(result => {
                history.push(PreviousLocation);
            })
    }
    const getEmailOfUser = e => {
        setEmail(e.target.value);
    }
    const getPasswordsOfUser = e => {
        setPassword(e.target.value);
    }
    const handelPrevent = e => {

        isLogIn ? userCreateAnAccount(emails, passwords) : userSignIn(emails, passwords)
        .then(result => {
            history.push(PreviousLocation);
        }); 
        e.preventDefault();
    }
    const chackAccount = e => {
        setIsLogIn(e.target.checked);
    }
    return (
        <div>
            {
                !user.mail ? <div className='container' >
                    <Form className='w-50 mt-5' >
                        <Form.Label>Please {isLogIn ? 'Create An Account' : 'Login'}</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" onBlur={getEmailOfUser} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" onBlur={getPasswordsOfUser} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" onChange={chackAccount} label="don't have an account" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handelPrevent}>
                            {isLogIn ? 'Resistation' : 'Login'}
                        </Button>
                    </Form>
                </div> :
                    <Button variant="primary" onClick={signOutButton} type="submit">
                        Log out
                    </Button>
            }
            {
                user.mail ?
                    <div>
                        <h4>name : {user.name}</h4>
                        <h4>Email : {user.mail}</h4>
                        <img src={user.pic} alt="" />
                    </div>
                    : <Button variant="primary" onClick={useGoogleLogInHandel} type="submit">
                        Google Login
                    </Button>
            }

        </div>
    );
};

export default LogIn;