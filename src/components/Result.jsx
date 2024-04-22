import React, { useEffect, useState } from 'react'
import "./css/main.css"
import "./css/result.css"

const Result = ({userChoice, pcChoice, gameResult,      setUserMoved}) => {
    const [showPcChoice, setShowPcChoice] = useState(false);
    const [clapWinner, setClapWinner] = useState(false);

    //SIMULAMOS UN "THE HOUSE IS THROWING":
    setTimeout(() => {
        setShowPcChoice(true);
    }, 1000);

    //ACTIVATE CLAP WINNER:
    useEffect(() => {
        if(showPcChoice){
            setTimeout(() => {
                setClapWinner(true);
                //ANIMACION DEL CLAP:
                document.querySelector(".result").classList.remove("hiddenOpacity");
            }, 500);
        }
    }, [showPcChoice]);
    
    //PLAY AGAIN:
    const playAgain = () => {
        //PRIMERO OCULTO 'result__section':
        document.querySelector(".result__section").classList.add("hiddenOpacity");
        document.querySelector(".result").classList.add("hiddenOpacity");

        //LUEGO HAGO EL CAMBIO:
        setTimeout(() => {
            setClapWinner("");
            setShowPcChoice("");
            setUserMoved(false);
        }, 500)
    };

    //ANIMACION DE ENTRADA:
    useEffect(() => {
        console.log(window.getComputedStyle(document.querySelector(".result__section")).getPropertyValue("opacity"));
        document.querySelector(".result__section").classList.remove("hiddenOpacity");
    }, [])

    return (
        <>
            <section className='result__section hiddenOpacity'>
                <div className='flex flex-column align-center gap-02'>
                    <h4>YOU PICKED</h4>
                    <div className={'img__gameOption ' + `${userChoice}`}></div>
                </div>

                <div className='flex flex-column align-center gap-02'>
                    <h4>THE HOUSE PICKED</h4>
                    {
                        showPcChoice ?
                        <div className={'img__gameOption ' + `${pcChoice}`}></div>
                        :
                            ""
                    }
                </div>
            </section>

            {/* CLAP WINNER */}
            <div className={'result flex flex-column align-center gap-01 hiddenOpacity ' + (gameResult.toLowerCase().split(" ").join(""))}>
                {
                    clapWinner ?
                        <>
                            <h2>{gameResult}</h2>
                            <button className='button' onClick={playAgain}>PLAY AGAIN</button>
                        </>
                    :
                        ""
                }
            </div>
        </>
    )
}

export default Result