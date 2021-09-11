import axios from 'axios'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

export default function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispath, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispath({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispath({ type: 'LOGIN_SUCCESS', payload: res.data })
        } catch (error) {
            dispath({ type: 'LOGIN_FAILURE' })
        }
    }

    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' className='loginInput' placeholder='Enter your username ...' ref={userRef}></input>
                <label>Password</label>
                <input type='password' className='loginInput' placeholder='Enter your password ...' ref={passwordRef}></input>

                <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
            </form>

            <button className="loginRegisterButton">
                <Link className='link' to='/register'> Register</Link></button>
        </div>
    )
}
