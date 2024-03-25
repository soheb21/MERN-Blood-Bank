import React from 'react'

const Pagination = ({ page, setPage, totalPage }) => {
    return (
        <>
            <p className='fixed bg-white right-1 bottom-3 md:bottom-14 flex text-xl  justify-center md:mt-2 md:justify-end'>
                <button className={`${page == 1 ? 'bg-gray-200' : 'bg-white'} shadow-md text-purple-500 text-xl rounded-full px-2 mr-2`} disabled={page == 1} onClick={() => setPage(page - 1)}><i className="fa-regular fa-circle-left"></i></button>
                {page} - <span className='ml-1 text-red-500'> {totalPage === 0 ? 1 : totalPage}</span>
                <button disabled={page === totalPage || totalPage === 0} className={`${page == totalPage ? 'bg-gray-200' : 'bg-white'} shadow-md text-purple-500 text-xl rounded-full px-2 ml-2`} onClick={() => setPage(page + 1)}><i className="fa-regular fa-circle-right"></i></button>
            </p>
        </>
    )
}

export default Pagination