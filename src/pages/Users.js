import React from 'react';
import { auth } from '../firebase/config';
import { withRouter } from 'react-router-dom';

const Users = props => {

    const signOut = () => {
        auth.signOut()
        props.history.push('/signin')
    }

    return (
        <div>            
            <button onClick={signOut}>Signout</button>            
        </div>
        
    )
}

export default withRouter(Users);