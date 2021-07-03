import React, { useRef, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase/config';

const SignIn = props => {
    const [user, setUser] = useState(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(user => {
            if(user) {
                const user_data = {
                    uid: user.user.uid,
                    email: user.user.email
                }
                // console.log(user.user.email, "asd")
                setUser(user_data)
                props.history.push('/users')
            } else {
                setUser(null)
            }
            // setUser(user)
            console.log(user, "user")
        }).catch(err => {
            console.log(err, "err")
        })

    }

    useEffect(() => {
        // const authStatus = auth.onAuthStateChanged(userAuth => {
            
        //     if(userAuth) {
        //         const user = {
        //             uid: userAuth.uid,
        //             email: userAuth.email
        //         }
        //         // console.log(user, "asd")
        //         setUser(user)
        //     } else {
        //         setUser(null)
        //     }
        // })
        // return authStatus
    }, [])

    return (           
        <form>
            <input type="email" ref={emailRef} />
            <input type="password" ref={passwordRef} />
            <button onClick={signIn}>Sign In</button>
        </form>  
    )
}

export default withRouter(SignIn);