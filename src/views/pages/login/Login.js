import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../../components/Spinner'
import { login, reset } from '../../../features/auth/authSlice'
import './../../pages/login/login.css'

import { Link } from 'react-router-dom'

function Login() {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  //isLoading,

  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/')
    }
    if (user) {
      navigate('/businessForm')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }
  // const Login = () => {
  return (
    <div className="login-form">
      <div className="login-business">
        <img className="loginimage" src="./fimboo.png" alt="fimboo" />
        <p className="business-income">
          {' '}
          Manage and track your
          <br /> business&apos;s
          <br /> <b>income </b> and <b>expenses</b> in <br />a smarter
          <br /> way!
        </p>

        <p>
          <span className="privacy-terms">privacy terms</span>
          &nbsp;&nbsp;and &nbsp;&nbsp;
          <span className="privacy-terms">conditions</span>
        </p>
      </div>
      <div className="card">
        {/* <div className="form_data"> */}

        <form onSubmit={onSubmit} className="formCard">
          {/* <Link to={user.id}>{user.name}</Link> */}
          <Link to="/register" className="register__link">
            REGISTER
          </Link>

          <h1 className="login">Login</h1>
          <p className="form-text">Email</p>

          <input
            type="email"
            className="FormInput"
            id="email"
            value={email}
            placeholder="Email"
            name="email"
            autoComplete="email"
            onChange={onChange}
          />

          <p className="form-text">Password</p>

          <div className="FormInput">
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="continuebuton" size="sm" variant="outline">
            CONTINUE
          </button>
          <p className="formforgot-password"> Forgot password</p>
        </form>
        {/* </div> */}
      </div>
    </div>
  )
}
export default Login
