import React, {useState} from 'react'

const Sayac = () => {
  
        const [count, setCount] = useState(0);
  
    return (
        <div className=' text-black text-center mx-auto sm:my-4 my-2'>
            <div>

                <div className="flex items-center border border-gray-200 rounded h-8">
                    <button
                    type="button"
                    className="inline-block border-r-2 border-white py-0.5 px-2 sm:py-auto sm:px-2  text-white text-sm hover:bg-gray-700 focus:relative h-8 py-auto"
                    onClick={() => setCount(count - 10)}
                    >
                        -10
                    </button>
                    <button
                    type="button"
                    className="inline-block py-0.5 px-2 sm:py-auto sm:px-2 text-white hover:bg-gray-700 focus:relative h-8"
                    onClick={() => setCount(count - 1)}
                    
                    >
                        -
                    </button>

                    <input
                    type="number"
                    id="Quantity"
                    value={count}
                    className=" h-8 w-10 sm:h-8 sm:w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none font-bold" 
                    />

                    <button
                    type="button"
                    className="inline-block border-r-2 border-white py-0.5 px-2 sm:py-auto sm:px-2 text-white hover:bg-gray-700 focus:relative h-8"
                    onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                    <button
                    type="button"
                    className="inline-block py-0.5 px-2 sm:py-auto sm:px-2 text-white text-sm hover:bg-gray-700 focus:relative h-8"
                    onClick={() => setCount(count + 10)}
                    >
                        +10
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sayac