import React from 'react'

const Login = () => {
  return (
    <div className="auth_page">
        <div className='bg-white shadow-md rounded-md'>
            <div className='px-10 py-5 flex items-center'>
                <div>
                    <form>
                        <div className='form-group'>
                             <label>Email</label>
                             <input type="email" placeholder='johndoe@gmail'/>
                        </div>
                        <div className='form-group'>
                             <label>Email</label>
                             <input type="email" placeholder='johndoe@gmail'/>
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