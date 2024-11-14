'use client'

import React from 'react'
import LoginForm from '../../components/Forms/LoginForm'
import gradientLogin from "@/app/assets/images/gradientLogin.png"


const page = () => {
    return (
        <div className='items-center flex bottom-0  bg-gradient-login '>
            <LoginForm />
          
        </div>
      )
}

export default page