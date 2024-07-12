import React from 'react'

const VideoTitle = ({title,overiew,id}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black' >
        <h1 className='text-6xl font-bold'>{title}</h1>
        <h2 className='py-6 text-lg w-1/4'>{overiew}</h2>
        <div>
            <button className='bg-white text-black  p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80 '>
            {/* <img className="" src = "G:\netflix-gpt\src\assests\playButton.png" /> */}
                Play</button>
            <button className='bg-gray-800 text-white p-4  mx-3 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  );
}

export default VideoTitle;