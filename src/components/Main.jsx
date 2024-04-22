import React, { useEffect } from 'react'
import "./css/main.css"

const Main = ({setUserMoved, setUserChoice, setPcChoice, setGameResult}) => {

    useEffect(() => {
        console.log(window.getComputedStyle(document.querySelector(".img__gameOptions__container")).getPropertyValue("opacity"));
        //PARA LA ANIMACION DE ENTRADA:
        document.querySelector(".img__gameOptions__container").classList.remove("hiddenOpacity");
        console.log(window.getComputedStyle(document.querySelector(".img__gameOptions__container")).getPropertyValue("opacity"));
    }, [])

    const play = (userChoice) => {
        const games = ["paper", "rock", "scissors"];
        const pcChoice = games[Math.floor(Math.random() * 3)];

        console.log(5465646);
        
        if(userChoice == pcChoice){
            setGameResult("TIE");
        }else{
            switch(userChoice){
                case "rock":
                    if(pcChoice == "paper") setGameResult("YOU LOSE");
                    if(pcChoice == "scissors") setGameResult("YOU WIN");
                    break;
                    
                case "paper":
                    if(pcChoice == "rock") setGameResult("YOU LOSE");
                    if(pcChoice == "scissors") setGameResult("YOU WIN");
                    break;
                    
                case "scissors":
                    if(pcChoice == "paper") setGameResult("YOU WIN");
                    if(pcChoice == "rock") setGameResult("YOU LOSE");
                    break;
            }
        }

        //OCULTAMOS EL JUEGO PARA MOSTRAR 'RESULT':
        document.querySelector(".img__gameOptions__container").classList.add("hiddenOpacity");
        setTimeout(() => {
            //RESULT VARIABLES:
            setUserChoice(userChoice);
            setPcChoice(pcChoice);
            //MAIN VARAIBLE:
            setUserMoved(true);
        }, 500);
    }

    return (
        <section className='img__gameOptions__container hiddenOpacity'>
            <button className='btn__foot'><div className='img__gameOption rock' onClick={() => play("rock")}></div></button>
            <button className='btn__foot'><div className='img__gameOption paper' onClick={() => play("paper")}></div></button>
            <button className='btn__foot'><div className='img__gameOption scissors' onClick={() => play("scissors")}></div></button>
            <div className='bgTriangle'></div>
        </section>
    )
}

export default Main