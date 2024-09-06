// import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import Telegram from '../assets/telegram.png'
import Gmail from '../assets/gmail.png'
import Instagram from '../assets/instagram.png'
import Git from '../assets/git.png'

export default function Contact() {
  return (
    <>
    <div id='contact'  className="min-h-svh flex flex-col justify-center">
        <h1 className="text-center text-white font-bold font-serif text-4xl">Nandan</h1>
        <div className='flex flex-row justify-between w-56 mt-5 ml-auto mr-auto gap-4'>
          <a href="https://www.linkedin.com/in/nandan-kumar-b8b8b9268/">
            <img className='hover:scale-125 p-1' src={LinkedIn} alt="" />
          </a>
          <a href="https://telegram.org/">
            <img className='hover:scale-125 p-1' src={Telegram} alt="" />
          </a>
          <a href="https://mail.google.com/">
            <img className='hover:scale-125 p-1' src={Gmail} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img className='hover:scale-125 p-1' src={Instagram} alt="" />
          </a>
          <a href="https://github.com/nandanSrivastava">
            <img className='hover:scale-125 p-1' src={Git} alt="" />
          </a>
        </div>
        <div className='text-center text-white font-serif mt-3 opacity-60'>
        © Nandan 2024. All rights reserved.
        </div>

    </div>
    </>
  )
}
