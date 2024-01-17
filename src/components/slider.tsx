"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const images = [
    'bradvision.svg',
    'f.svg',
    'valor.svg',
    'tc.svg',
    'bm.svg',
    'neofeed.svg'

];

const Slideshow = () => {
    const [_, setCount] = useState<number>(0)
    const [tst,setTst]= useState<boolean>(true)

    useEffect(() => {

      
        const intervalId = setInterval(() => {
           
            if (_+1 < images.length) {
                setCount(_ + 1);
            } else {
                setCount(0)

            }

        }, 5000);


        return () => { clearInterval(intervalId) };
    }, [_]);

    return (
        <div className="slide-container shrink-0 desktop:w-[30%] w-full rounded-2xl border-[1px] border-gray-50 border-r flex items-center  justify-around p-2">
            <span>Visto em: </span>
            <div className='w-[100px] min-h-[70px] max-h-[70px] flex items-center justify-center overflow-hidden '>
                {
                    <Image width={70} height={70} src={images[_]} className={`tst mx-3 my-2 transition duration-300 ease-in-out`} alt="image-slide" />
                }

            </div>

        </div>
    )
}
export default Slideshow