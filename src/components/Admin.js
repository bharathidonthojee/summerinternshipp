import React from 'react'
import {useForm} from 'react-hook-form'

function Admin(){
    const {register,handleSubmit,formState:{errors}}=useForm()

    // form submission
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }


    return(
        <div className='row mt-3  mt-0'>
        <b className="display-5 lform text-center ">Login</b>
        <div className='col-11 col-sm-8 col-md-6 mx-auto mt-3 text-warning'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* User Name  */}
            <div className='mb-3'>
               <label htmlFor='fn'>User Name</label>
               <input type='text' id="fn" className="form-control"{...register("firstname",{required:true})}/>
               {errors.firstname?.type ==='required' && <p className="text-danger">*User Name is Required</p>}
            </div>
                         {/* PassWord */}
                         <div className='mb-3'>
               <label htmlFor='fn'>Password</label>
               <input type='password' id="ln" className="form-control"{...register("password",{required:true})}/>
               {errors.lastname?.type ==='required' && <p className="text-danger">*Password is Required</p>}
            </div>
             
             
             
               
            <div>
              <button type="submit" className="btn btn-light text-dark w-100 mt-5">Submit</button>
            </div>
        </form>
        
    </div>
    </div>
    )
}
export default Admin

