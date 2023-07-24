import { signOut,getAuth } from "firebase/auth"
export function Home(){
    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return <div>
        <h1>This is the Home page</h1>
        <button onClick={() => {handleSignOut()}}>Sign Out</button>
    </div> 
    
}