import React, { useState } from 'react';
import './DiceStage.css';

const DiceStage = () => {
    const [diceResults, setDiceResults] = useState([]);

    const throwDice = (diceAmount, diceMax) => {
        let results = [];
        for (let i = 0; i < diceAmount; i++) {
            results.push(Math.round(Math.ceil(Math.random() * diceMax)))
        }
        setDiceResults(results)
    }
    console.log(diceResults)

    let thrownDices = diceResults.map((dice) => {

/*         let dotsArray = [];
        for (let i = 0; i < dice; i++) {
            dotsArray.push(i);
        } */
/*         let dots = dotsArray.map(dot => {
            return (
                <div className="dot">•</div>
            )
        }); */

        /* return (
            <div className="dice dots">{dots}</div>
        ) */

        return (
            <div className="dice">{dice}</div>
        )
    })
    return (
        <div id="DiceStage">
            <div id="Dice_Container">
                <div className="dice 1d2" onClick={() => { throwDice(1, 2) }}>1d2</div>
                <div className="dice 1d4" onClick={() => { throwDice(1, 4) }}>1d4</div>
                <div className="dice 1d6" onClick={() => { throwDice(1, 6) }}>1d6</div>
                <div className="dice 1d8" onClick={() => { throwDice(1, 8) }}>1d8</div>
                <div className="dice 1d10" onClick={() => { throwDice(1, 10) }}>1d10</div>
                <div className="dice 1d12" onClick={() => { throwDice(1, 12) }}>1d12</div>
                <div className="dice 1d20" onClick={() => { throwDice(1, 20) }}>1d20</div>
                <div id="2d2_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 2) }}>
                    <div className="dice 1d2">1d2</div>
                    <div className="dice 1d2">1d2</div>
                </div>
                <div id="2d4_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 4) }}>
                    <div className="dice 1d4">1d4</div>
                    <div className="dice 1d4">1d4</div>
                </div>
                <div id="2d6_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 6) }}>
                    <div className="dice 1d6">1d6</div>
                    <div className="dice 1d6">1d6</div>
                </div>
                <div id="2d8_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 8) }}>
                    <div className="dice 1d8">1d8</div>
                    <div className="dice 1d8">1d8</div>
                </div>
                <div id="2d10_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 10) }}>
                    <div className="dice 1d10">1d10</div>
                    <div className="dice 1d10">1d10</div>
                </div>
                <div id="2d12_Container" className="doubleDice_Container" onClick={() => { throwDice(2, 12) }}>
                    <div className="dice 1d12">1d12</div>
                    <div className="dice 1d12">1d12</div>
                </div>
            </div>
            {diceResults.length > 0 ?
                <div id="Result_Container">
                    <h3>Results:</h3>
                    <div id="Result_Dices">
                        {thrownDices}
                    </div>
                </div>
                : <></>}
        </div>
    );
}

export default DiceStage;
