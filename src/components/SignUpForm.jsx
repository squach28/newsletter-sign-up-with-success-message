import heroImg from '../assets/images/illustration-sign-up-mobile.svg'
import desktopImg from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SignUpForm = ({ toggleCompleted }) => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
      setError(false)
    }
  
    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }
  
    const handleSubscribe = (e) => {
      e.preventDefault()
      if(validateEmail(email)) {
        toggleCompleted()
      } else {
        setError(true)
      }

    }

    return (
        <div className="md:flex md:flex-row-reverse justify-center items-center bg-white md:p-3 rounded-md">
        <img className="md:hidden" src={heroImg} alt="illustration sign up"/>
        <img className="sm:hidden md:block" src={desktopImg} alt="illustration sign up"/>
        <div className="p-6 flex flex-col gap-5 md:p-6">
            <h1 className="text-4xl md:text-6xl font-bold">Stay updated!</h1>

            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className="flex flex-col gap-3 md:gap-4">
            <li className="flex items-start gap-3 justify-start">
                <img src={iconList}/>
                <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-start gap-3 justify-start">
                <img src={iconList}/>
                <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-start gap-3 justify-start">
                <img src={iconList}/>
                <p>And much more!</p>
            </li>


            </ul>
            <form className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label className="font-bold" htmlFor="">Email address</label>
                {error ? <p className="text-xs font-bold text-[#ff6257]">Valid email required</p> : null}
            </div>
            <input
                id="email"
                className={`border-2 p-4 rounded-md border-[#D6D6D6] ${error ? 'bg-[#FFE8E6] text-[#ff6257] border-[#DDB0AA] placeholder-[#ff6257]' : ''}`}
                placeholder="email@company.com"
                type="email" 
                autoComplete='email'
                onChange={handleEmailChange}
                value={email}/>
            <button 
                onClick={handleSubscribe} 
                className="text-white bg-[#232742] w-full p-4 mt-4 rounded-md hover:text-white hover:bg-[#ff6257]">Subscribe to monthly newsletter</button>
            </form>
        </div>
        </div>
    )
}

SignUpForm.propTypes = {
    toggleCompleted: PropTypes.func
}

export default SignUpForm