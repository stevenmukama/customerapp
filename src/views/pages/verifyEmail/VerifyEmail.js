/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { verifyEmail } from 'src/features/auth/authSlice'

function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const [token] = useState(searchParams.get('token'))
  // const [token, setToken] = useState(searchParams.get('token'))
  console.log(searchParams.get('token'))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyEmail(token))
  }, [dispatch, token])
  return <div> email is verfied</div>
}

export default VerifyEmail
