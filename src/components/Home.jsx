import Photo from '../assets/Photo.png'
import LinkedIn from '../assets/linkedin.png'
import Telegram from '../assets/telegram.png'
import Gmail from '../assets/gmail.png'
import Instagram from '../assets/instagram.png'
import Git from '../assets/git.png'
export default function Home() {
  return (
    <>
      <div id='home' className='flex flex-col-reverse justify-around mt-20 sm:flex-row h-96 min-h-svh'>
        <div className='mt-12 w-10 h-64 flex flex-row justify-between sm:flex-col'>
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
        <span className=" text-white mt-5 pt-8">
          {/* <h1 className='font-extrabold text-3xl'>Nandan Shrivastava</h1> */}
          <h1 className='text-8xl font-serif font-extrabold'>Hii,</h1>
          <h3 className='text-center font-serif text-5xl'> I&apos;m Nandan,<br />
            <h2 className='text-2xl text-right'>Web Developer..</h2>
            <h5 className='text-xl opacity-60 text-right'>I build things for web.....</h5>
          </h3>
          <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded-xl">
              <a href="https://t.me/shrivastava_nandan" target="_blank" rel="noopener noreferrer">
                Say Hello 🚀
              </a>
            </button>
            </div>
        </span>


        <img className='rounded w-auto h-auto'
          src={Photo} alt="" />
      </div>
    </>
  )
}
