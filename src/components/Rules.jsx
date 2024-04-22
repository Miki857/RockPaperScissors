import React from 'react'
import "./css/rules.css"

const Rules = () => {

    const showRules = () => {
        document.querySelector(".boardRules__container").classList.remove("hiddenTransition");
    };

    const hideRules = () => {
        document.querySelector(".boardRules__container").classList.add("hiddenTransition");
    };

    return (
        <>
            <button className='button cursor-pointer' onClick={showRules}>RULES</button>
            <div className='boardRules__container flex justify-center align-center hiddenTransition'>
                <div className='boardRules flex flex-column justify-evenly align-center'>
                    <h2>RULES</h2>
                    <div className='imageRules'></div>
                    <i className='height-fitContent bx bx-x bx-md cursor-pointer' onClick={hideRules}></i>
                </div>
            </div>
        </>
    )
}

export default Rules