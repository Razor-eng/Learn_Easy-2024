import React from 'react'

const Inputs = ({ name, textArea, submit, colorMode }) => {
    return (
        <div className='col'>
            {submit ? (
                <input type="submit" value="send" className={`${colorMode === "dark" ? "bg-slate-400" : "bg-slate-300"}`} />
            ) : (
                <div className={`inputBox ${textArea && "textarea"} ${colorMode === "light" ? 'text-black' : 'text-white'}`}>
                    {textArea ?
                        (
                            <textarea required="required"></textarea>
                        )
                        :
                        (
                            <input type="text" required="required" />
                        )
                    }
                    <span className="text">{name}</span>
                    <span className={`line ${colorMode === "light" ? "bg-black" : "bg-white"}`}></span>
                </div>
            )}
        </div>
    )
}

export default Inputs