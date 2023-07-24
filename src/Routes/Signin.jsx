import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
export function Signin(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignIn(e){
        e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        console.log(user)
        navigate('/home')
        //...
    })
    .catch((error) => {
        // Error
        console.log(error)
    })
    }

    return <div>
           <h1>This is the sign in page</h1>
           <form action="#">
            <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" />
            <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" />
            <button onClick={(e) => {handleSignIn(e)}}>Sign In</button>
           </form>
    </div>
 
}