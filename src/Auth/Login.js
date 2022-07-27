import React from 'react'
import logo from "../Images/logo1.png"

const Login = () => {
  return (
    <div className="auth_page">
        <div className='bg-white shadow-md rounded-md'>
            <div className='px-10 py-5 flex items-center'>
                <div>
                    <div className='mb-5'>
                        <img src={logo} alt="logo" className='h-12'/>
                    </div>
                    <form>
                        <div className='form-group'>
                             <label>Email</label>
                             <input type="email" placeholder='johndoe@gmail'/>
                        </div>
                        <div className='form-group mt-3'>
                             <label>Password</label>
                             <input type="password" placeholder='Enter password'/>
                        </div>
                        <button type='submit'>Sign In</button>

                        <div className='flex justify-between items-center'>
                             
                        </div>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Login