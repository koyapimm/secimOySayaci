import React from 'react'
import Rte from '../assets/rte.png'
import Ince from '../assets/ince.png'
import Kilicdaroglu from '../assets/kilicdaroglu.png'
import Sinanogan from '../assets/sinanogan.png'
import Sayac from './Sayac'

const Cb = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  max-w-[1240px] mx-auto'>
        <div className='flex flex-col m-8 text-center px-2'>
          <div className='border-l-4 border-r-4 border-white mx-4 px-3 py-8 items-center'>
                <img
                  alt="RTE"
                  src={Rte}
                  className="h-36 w-36 mx-auto border-white border-2"
                />

                <h3 className="mt-4 text-lg font-bold sm:text-xl text-white">
                  RECEP TAYYİP 
                  <h3>ERDOĞAN</h3>
                </h3>
                <div className='border-white border-y-4 mx-4 my-3'>
                  <div className=" inline-block max-w-sm text-white border-white border-2 my-6 mx-auto px-10 py-10 rounded-full">
                  </div>
                </div>
          </div>
          <Sayac />
        </div>
        <div className='flex flex-col m-8'>
          <div className='border-l-4 border-r-4 border-white mx-4 px-3 py-8 items-center text-center'>
                <img
                  alt="Ince"
                  src={Ince}
                  className="h-36 w-36 mx-auto border-white border-2"
                />

                <h3 className="mt-4 text-lg font-bold sm:text-xl text-white">
                  MUHARREM 
                  <h3>İNCE</h3>
                </h3>
                <div className='border-white border-y-4 mx-4 my-3'>
                  <div className=" inline-block max-w-sm text-white border-white border-2 my-6 mx-auto px-10 py-10 rounded-full">
                  </div>
                </div>
          </div>
          <Sayac />
        </div>
        <div className='flex flex-col m-8'>
          <div className='border-l-4 border-r-4 border-white mx-4 px-3 py-8 items-center text-center'>
                <img
                  alt="Kilicdaroglu"
                  src={Kilicdaroglu}
                  className="h-36 w-36 mx-auto border-white border-2"
                />

                <h3 className="mt-4 text-lg font-bold sm:text-xl text-white">
                  KEMAL <h3>KILIÇDAROĞLU</h3>
                </h3>
                <div className='border-white border-y-4 mx-4 my-3'>
                  <div className=" inline-block max-w-sm text-white border-white border-2 my-6 mx-auto px-10 py-10 rounded-full">
                  </div>
                </div>
          </div>
          <Sayac />
        </div>
        <div className='flex flex-col m-8'>
          <div className='border-l-4 border-r-4 border-white mx-4 px-3 py-8 items-center text-center'>
                <img
                  alt="Ogan"
                  src={Sinanogan}
                  className="h-36 w-36 mx-auto border-white border-2"
                />

                <h3 className="mt-4 text-lg font-bold sm:text-xl text-white">
                  SİNAN
                  <h3>OĞAN</h3>
                </h3>
                <div className='border-white border-y-4 mx-4 my-3'>
                  <div className=" inline-block max-w-sm text-white border-white border-2 my-6 mx-auto px-10 py-10 rounded-full">
                  </div>
                </div>
          </div>
          <Sayac />
        </div>
      </div>
  )
}

export default Cb