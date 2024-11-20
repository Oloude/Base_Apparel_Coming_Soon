 import errorIcon from '../assets/icon-error.svg'
 import arrowIcon from '../assets/icon-arrow.svg'

 import { useState } from 'react'

function Input() {

    const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function handleEmail(value: string) {
      setEmail(value.trim());
      validatedEmail(value.trim());
    }
  
    function validatedEmail(value: string) {
      if (regex.test(value)) {
        setError('');
      } else {
        setError('Please provide a valid email');
      }
    }
  
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (!error && email) {
        console.log('Form submitted with email:', email);
      } else {
        setError('Please provide a valid email before submitting');
      }
    }

  return (
    <div className='flex flex-col gap-1'>
    <form onSubmit={(e)=>handleSubmit(e)} className={`${error ? 'border-softRed' : 'border-desaturatedRed'} border  rounded-full pl-3 pr-28 py-2 flex items-center justify-between relative `}>
        <input value={email} onChange={(e)=>handleEmail(e.target.value)} type="email" placeholder="Email Address"  className='text-darkRed text-lg bg-inherit p-2 outline-none placeholder:text-desaturatedRed' />
        {error && <img src={errorIcon} alt="" />}
        <button className='bg-gradient-to-r from-linearFrom to-linearTo py-5  px-10 -right-4 rounded-full absolute'><img src={arrowIcon} alt="" /></button>
    </form>
    <span className='text-sm text-softRed'>{error}</span>
    </div>
  )
}

export default Input