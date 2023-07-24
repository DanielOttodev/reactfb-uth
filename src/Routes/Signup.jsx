import { useState } from "react"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
export function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    async function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        console.log(user)
        //...
    })
    .catch((error) => {
        // Error
        console.log(error)
    })
    }

    return <div>
           <h1>This is the sign up page</h1>
           <form action="#">
            <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" />
            <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" />
            <button onClick={(e) => {handleSignUp(e)}}>Sign Up</button>
           </form>
    </div>
 
}