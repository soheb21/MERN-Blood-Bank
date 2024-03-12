const Navbar = ({ isOpen, setIsOpen }) => {
    return (
        <div className='bg-yellow-400 h-full flex items-center relative justify-end px-2'>
            Navbar

            <button className='md:hidden absolute left-2' onClick={() => setIsOpen(!isOpen)} > <i className="fa-solid fa-bars" /></button>
        </div>
    )
}

export default Navbar