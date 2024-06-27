import { async } from '@firebase/util'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider} from '../../config/firebase-config'
import {useNavigate } from 'react-router-dom'

export const Auth =() => {
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth,provider)
        console.log(results)
        const authInfo = {
            userID : results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth : true,
        }
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate('/expense-tracker')
    }

    return (
        <div className="login-page">
        <p>sign in with google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign in with Google</button>
    </div>
    )
}