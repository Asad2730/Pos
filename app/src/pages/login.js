import React from 'react';
import { useState } from "react";
import CustomButton from "../components/ui/button";
import CustomInput from "../components/ui/input";
import CustomText from "../components/ui/text";
import { useNavigate } from "react-router-dom";
// import { login } from "../DB/loginDb";


export default function Login() {
  
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
   name:'',
   password:'',
  });
  
  const submit = async()=>{
    const isFormValid = formValues.name !== '' && formValues.password !== '';
    if(isFormValid){
       try{
        //  const rows = await login(formValues.name,formValues.password);
        console.log('rows',rows);
        navigate('/sale')
       }catch(error){
        console.log(error)
       }
    }
  }

    return (
      <>
        <div className="flex min-h-screen flex-1">
        <div className="flex flex-1 w-1/2 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
        
            </div>

            <div className="mt-10">
              <div>
                <form  className="space-y-6">
                  <div>
                    <CustomText label={'User Name'}/>
                    <div className="mt-2">
                    <CustomInput 
                      placeholder={'your name'} 
                      type={'text'}
                      required={true}
                      onChange={setFormValues}
                      value={formValues.name}  
                      field={'name'}                 
                    />
                    </div>
                  </div>

                  <div>
                    <CustomText label={'Password'}/>
                    <div className="mt-2">
                      <CustomInput 
                       placeholder={'your password'} 
                       type={'password'}
                       required={true}
                       onChange={setFormValues} 
                       value={formValues.password}
                       field={'password'}  
                      />
                    </div>
                  </div>                 

                  <div>
                   <CustomButton 
                     label={'Login'}
                     onClick={submit}
                   />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <div className="relative w-1/2 hidden flex-1 lg:block">
          <img
            className="absolute inset-0 h-screen  object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
      </>
    )
  }
  