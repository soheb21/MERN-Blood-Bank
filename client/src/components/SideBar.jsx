import React from 'react'

const SideBar = ({ isOpen, setIsOpen }) => {

    return (
        <div className='bg-green-400 h-full relative p-2'>
            SideBar
            <button  className='md:hidden absolute right-4' onClick={() => setIsOpen(!isOpen)} >
          <i className="fa-solid fa-xmark" />
            </button>
        </div>

    )
}

export default SideBar