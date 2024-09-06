import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-#212121 p-4 flex flex-row justify-between fixed top-2 right-3">
            <div className="flex justify-between items-center w-14 fixed top-4 left-6">
                <div className="text-white">Nandan</div>
                <button
                    className="flex flex-row justify-end text-white fixed top-4 right-4 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            <ul className={`md:flex flex-row justify-around scroll-smooth list-none m-0 p-0 hidden ${isOpen ? 'block' : ''} md:block`}>
 
                <li className="mx-4">
                    <a href="#home" className="text-white no-underline">Home</a>
                </li>
                <li className="mx-4">
                    <a href="#about" className="text-white no-underline">About</a>
                </li>
                <li className="mx-4">
                    <a href="#skills" className="text-white no-underline">Skills</a>
                </li>
                <li className="mx-4">
                    <a href="#projects" className="text-white no-underline">Projects</a>
                </li>
                <li className="mx-4">
                    <a href="#contact" className="text-white no-underline">Contact</a>
                </li>
            </ul>
        </nav>
    );
}