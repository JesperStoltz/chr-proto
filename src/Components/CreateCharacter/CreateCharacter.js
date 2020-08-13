import React, { useState } from 'react';
import Races from "../../Data/Races";
import Classes from "../../Data/Classes";
import BaseInventory from "../../Data/BaseInventory";
import './CreateCharacter.css';

const CreateCharacter = (props) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("female");
    const [race, setRace] = useState("");
    const [classC, setClassC] = useState("");
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [perception, setPerception] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [wisdom, setWisdom] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [charisma, setCharisma] = useState(10);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeGender = (e) => {
        setGender(e.target.value);
    }
    const onChangeRace = (e) => {
        setRace(e.target.value);
    }
    const onChangeClassC = (e) => {
        setClassC(e.target.value);
    }
    const onChangeStrength = (e) => {
        checkStats(setStrength, strength, parseInt(e.target.value));
    }
    const onChangeDexterity = (e) => {
        checkStats(setDexterity, dexterity, parseInt(e.target.value));
    }
    const onChangeConstitution = (e) => {
        checkStats(setConstitution, constitution, parseInt(e.target.value));
    }
    const onChangePerception = (e) => {
        checkStats(setPerception, perception, parseInt(e.target.value));
    }
    const onChangeWisdom = (e) => {
        checkStats(setWisdom, wisdom, parseInt(e.target.value));
    }
    const onChangeIntelligence = (e) => {
        checkStats(setIntelligence, intelligence, parseInt(e.target.value));
    }
    const onChangeCharisma = (e) => {
        checkStats(setCharisma, charisma, parseInt(e.target.value));
    }
    const onSubmitCharacter = (e) => {
        e.preventDefault();
        if (!name || !gender || !race || !classC) {
            return;
        }
        props.updateCharacter({
            name: name,
            gender: gender,
            race: race,
            class: classC,
            stats: {
                strength: Classes[classC].stat["strength"] ? parseInt(strength) + Classes[classC].stat["strength"] : parseInt(strength),
                dexterity: Classes[classC].stat["dexterity"] ? parseInt(dexterity) + Classes[classC].stat["dexterity"] : parseInt(dexterity),
                constitution: Classes[classC].stat["constitution"] ? parseInt(constitution) + Classes[classC].stat["constitution"] : parseInt(constitution),
                perception: Classes[classC].stat["perception"] ? parseInt(perception) + Classes[classC].stat["perception"] : parseInt(perception),
                wisdom: Classes[classC].stat["wisdom"] ? parseInt(wisdom) + Classes[classC].stat["wisdom"] : parseInt(wisdom),
                intelligence: Classes[classC].stat["intelligence"] ? parseInt(intelligence) + Classes[classC].stat["intelligence"] : parseInt(intelligence),
                charisma: Classes[classC].stat["charisma"] ? parseInt(charisma) + Classes[classC].stat["charisma"] : parseInt(charisma)
            },
            special: Races[race].special,
            spells: Classes[classC].spells,
            inventory: BaseInventory[classC],
            hp: Classes[classC].hp
        });

        props.updateReady2Play(true);
    }

    const checkStats = (updater, prevState, newState) => {
        const total = (strength + dexterity + constitution + perception + wisdom + intelligence + charisma - 70);
        if (newState < 10) {
            return;
        }
        if (total >= 20 && prevState < newState) {
            return;
        }
        updater(newState);
    }

    return (
        <div id="CreateCharacter">
            <form onSubmit={onSubmitCharacter}>
                <label htmlFor="name">Name
                    <input id="name" type="text" value={name} onChange={onChangeName} />
                </label>
                <label htmlFor="gender">Gender
                    <select id="gender" onChange={onChangeGender}>
                        <option disabled selected value>Select a gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </label>
                <label htmlFor="race">Race
                    <select id="race" onChange={onChangeRace}>
                        <option disabled selected value>Select a race</option>
                        <option>Isen</option>
                        <option>Dether</option>
                        <option>Guldan</option>
                        <option>Elithin</option>
                    </select>
                </label>
                {race ? 
                    <div id="Information_container">
                    {Races[race] ? Races[race].story : ""}
                    <h3>Specials:</h3>
                    {Races[race] ? Races[race].special : ""}
                </div>
                : <></>
                }
               
                <label htmlFor="classC">Class
                    <select id="classC" onChange={onChangeClassC}>
                        <option disabled selected value>Select a class</option>
                        <option>Warrior</option>
                        <option>Sorcerer</option>
                        <option>Cleric</option>
                        <option>Rogue</option>
                    </select>
                </label>
                <div id="Information_container">
                    {Classes[classC] ? Classes[classC].information : ""}
                </div>
                <label htmlFor="strength">Strength
                    <input id="strength" type="number" min={10} max={18} value={strength} onChange={onChangeStrength} />
                </label>
                <label htmlFor="dexterity">Dexterity
                    <input id="dexterity" type="number" min={10} max={18} value={dexterity} onChange={onChangeDexterity} />
                </label>
                <label htmlFor="constitution">Constitution
                    <input id="constitution" type="number" min={10} max={18} value={constitution} onChange={onChangeConstitution} />
                </label>
                <label htmlFor="perception">Perception
                    <input id="perception" type="number" min={10} max={18} value={perception} onChange={onChangePerception} />
                </label>
                <label htmlFor="wisdom">Wisdom
                    <input id="wisdom" type="number" min={10} max={18} value={wisdom} onChange={onChangeWisdom} />
                </label>
                <label htmlFor="intelligence">Intelligence
                    <input id="intelligence" type="number" min={10} max={18} value={intelligence} onChange={onChangeIntelligence} />
                </label>
                <label htmlFor="charisma">Charisma
                    <input id="charisma" type="number" min={10} max={18} value={charisma} onChange={onChangeCharisma} />
                </label>
                <button>Create your character</button>
            </form>
        </div>
    );
}

export default CreateCharacter;