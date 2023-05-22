import React, {useState} from 'react'

const Sayac = () => {
  
        const [count, setCount] = useState(0);
        let statusplus = false
        if(count <= 0){
            statusplus=true
        }
  
    return (

        <div class="custom-number-input h-10 w-32 m-auto">
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button 
                data-action="decrement" 
                className={`bg-gray-300 text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none ${statusplus ? 'disabled' : ' '} `}
                onClick={() => setCount(count - 1)}
                disabled={statusplus}
                >
                    <span class="m-auto text-2xl font-thin">
                        −
                    </span>
                </button>
                <input 
                type="number" 
                value={count}
                onChange={e => setCount(parseInt( e.target.value ))}
                class=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" 
                name="custom-input-number" 
                />

                
                <button 
                data-action="increment" 
                class="bg-gray-300 text-gray-700 hover:text-gray-800 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                onClick={() => setCount(count + 1)}
                >
                    <span class="m-auto text-2xl font-thin">
                        +
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Sayac