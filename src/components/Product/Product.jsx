import React from 'react'

const img1="https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg"

export const Product = () => {
  return (
    <div className='w-96 h-96 bg-slate-600 flex flex-col items-center content-between text-white border-double border-8'>
      <img src={img1} alt="Tiger" className/>
      <h2 className='m-5 font-bold text-3xl text-center'>Category</h2>
      <div>
        <p className='text-center font-medium text-sky-300'>title</p>
        <p className='font-bold text-red-600'>$price</p>
        {/* <button className='bg-sky-500 hover:bg-sky-700'>comprar</button> */}
      </div>
    </div>
  )
}
