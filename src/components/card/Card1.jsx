import React from 'react';

function Card1({Card1Paragraph,Card1Image,Card1BtnValue,Card1Heading}) {
  return (
    <div className='container'>
        <div className="card w-[350px] bg-white text-black flex rounded justify-center items-center">
            <div className="icon">
                {Card1Image}
            </div>
            <div className="text ml-5 mb-3">
                <h1 className='text-1xl mt-3 font-bold mb-2'>{Card1Heading}</h1>
                <p className='text-sm mb-2'>{Card1Paragraph}</p>
                <a className='font-bold' href='#'>{Card1BtnValue}</a>
            </div>
        </div>
    </div>
  )
}

export default Card1