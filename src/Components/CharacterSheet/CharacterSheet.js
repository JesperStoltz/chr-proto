import React, { useState, useEffect } from 'react';
import DiceStage from "../DiceStage/DiceStage";
import './CharacterSheet.css';

const CharacterSheet = (props) => {
    const [abilities, setAbilities] = useState([]);
    const [spells, setSpells] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [armorClass, setArmorClass] = useState(10);
    const [newItem, setNewItem] = useState("");
    const [showAdd, setShowAdd] = useState(false);
    const [hp, setHp] = useState(0);
    const { character } = props;

    console.log(character)

    const displayDescription = (id) => {
        if (document.querySelector(`#${id}`).classList.contains("hide")) {
            document.querySelector(`#${id}`).className = "show main_td";
        }
        else {
            document.querySelector(`#${id}`).className = "hide";
        }
    }

    const onClickUseItem = (updater, prevState, name) => {
        let newArray = [...prevState];
        const index = newArray.map((item) => { return item.name }).indexOf(name);
        newArray[index].available = !newArray[index].available;
        updater(newArray);
    }

    const addItem = () => {
        if (!newItem) {
            return;
        }
        let newInventory = [...inventory];
        newInventory.push({
            name: newItem,
            description: "",
            available: true
        });
        setInventory(newInventory)
        setNewItem("");
        setShowAdd(false);
    }

    const onChangeNewItem = (e) => {
        setNewItem(e.target.value);
    }

    const onChangeHP = (e) => {
        setHp(e.target.value);
    }
    
    let abilityRows = abilities.map((ability, index) => {
        if (index === 0) {
            let special = character.special.split(",");
            return (
                <tr>
                    <td>{ability.ability}</td>
                    <td>{ability.value}</td>
                    <td>{Math.floor((ability.value - 10) / 2)}</td>
                    <td>{armorClass}</td>
                    <td>{special[0]}</td>
                </tr>
            )
        }
        if (index === 1) {
            let special = character.special.split(",");
            return (
                <tr>
                    <td>{ability.ability}</td>
                    <td>{ability.value}</td>
                    <td>{Math.floor((ability.value - 10) / 2)}</td>
                    <td></td>
                    <td>{special[1]}</td>
                </tr>
            )
        }
        return (
            <tr>
                <td>{ability.ability}</td><td>{ability.value}</td><td>{Math.floor((ability.value - 10) / 2)}</td>
            </tr>
        )
    });

    let spellsRows = spells.map(spell => {
        let rowId = spell.name.split(" ").join("");
        return (
            <>
                <tr>
                    <td className="main_td" onClick={() => { displayDescription(rowId) }}>{spell.name}</td><td className="check_td"><input type="checkbox" onClick={() => { onClickUseItem(setSpells, spells, spell.name) }} checked={spell.available} /></td>
                </tr>
                <tr id={rowId} className="hide">
                    <td>{spell.description}</td><td></td>
                    <hr />
                </tr>       
            </>
        )
    });

    let inventoryRows = inventory.map(item => {
        let rowId = "";
        if (item.name === "50 feet Rope") {
            rowId = "rope"
        }
        else {
            rowId = item.name.split(" ").join("");
        }

        return (
            <>
                <tr>
                    <td className="main_td" onClick={() => { displayDescription(rowId) }}>{item.name}</td><td className="check_td"><input type="checkbox" checked={item.available} onClick={() => { onClickUseItem(setInventory, inventory, item.name) }} /></td>
                </tr>
                <tr id={rowId} className="hide">
                    <td>{item.description}</td>
                    <td>{item.damage ? `damage: ${item.damage}` : item.armor >= 0 ? `Armor: ${item.armor}` : <></>}</td>
                    <hr />
                </tr>
            </>
        )
    });

    useEffect(() => {
        let abilityArray = [];
        for (let ability in character.stats) {
            abilityArray.push({ ability: ability, value: character.stats[ability] });
        }
        setAbilities(abilityArray);
    }, []);

    useEffect(() => {
        setSpells([...character.spells]);
    }, []);

    useEffect(() => {
        setInventory([...character.inventory]);
    }, []);

    useEffect(() => {
        setHp((character.hp + Math.floor((character.stats["constitution"] - 10) / 2)));
    }, []);


    useEffect(() => {
        let armorBonus = Math.floor((character.stats["dexterity"] - 10) / 2);
        for (let item in character.inventory) {
            if (character.inventory[item].armor) {
                armorBonus += character.inventory[item].armor;
            }
        }
        if (character.race === "Dether") {
            armorBonus += 1;
        }
        armorBonus += armorClass;
        setArmorClass(armorBonus)
    }, [character]);

    return (
        <div id="CharacterSheet">
            <div id="Character_header">
                <h1>{character.name}</h1>
                <h5>The {character.race} {character.gender === "Female" ?
                    character.class === "Sorcerer" ? "Sorceress" : character.class
                    : character.class}
                </h5>
                <label htmlFor="HP">
                    HP: <input id="HP_input" type="number" onChange={onChangeHP} value={hp} />
                </label>
            </div>
            <div id="Character_stats">
                <table>
                    <thead>
                        <tr>
                            <th>Ability</th><th>Score</th><th>Modifier</th><th>Armor Class</th><th>Special</th>
                        </tr>
                    </thead>
                    <tbody>
                        {abilityRows}
                    </tbody>
                </table>
            </div>

            <hr />

            {spells.length > 0 ?
                <>
                    <div id="Character_spells">
                        <table>
                            <thead>
                                <tr>
                                    <th>Spell</th><th>Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {spellsRows}
                            </tbody>
                        </table>
                    </div>
                    <hr />
                </>
                : <></>}



            <div id="Character_inventory">
                <div id="AddItem" onClick={() => {setShowAdd(!showAdd)}}>+</div>
                <div className={showAdd ? "" : "hide"}>
                    <input type="text" onChange={onChangeNewItem}/><button onClick={addItem}>Add item</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Items</th><th>Available</th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryRows}
                    </tbody>
                </table>
            </div>
            <hr />
            <div id="DiceStage_container">
                <DiceStage />
            </div>

        </div>
    );
}

export default CharacterSheet;
