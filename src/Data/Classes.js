import React from 'react';
const Classes = {
    Warrior: {
        stat: {
            strength: 2,
            constitution: 2,
            intelligence: -2,
            perception: -1
        },
        information: <p>Warriors are typically fighters wielding a weapon, either one handed or double handed, and a shield. <br />
            They get the following benefits/disadvantages: <br />
            <b>Strength: +2</b><br />
            <b>Constitution: +2</b><br />
            <b>Intelligence: -2</b><br />
            <b>Perception: -1</b><br />
        </p>,
        spells: [],
        hp: 12
    },
    Sorcerer: {
        stat: {
            intelligence: 2,
            charisma: 2,
            strength: -2,
            constitution: -1
        },
        information: <p>Sorcerers are magic users, some wielding their arcane elemental magic through years of studies, and some from a natural innate power that has been inside them since birth. <br />
        They get the following benefits/disadvantages: <br />
            <b>Intelligence: +2</b><br />
            <b>Charisma: +2</b><br />
            <b>Strength: -2</b><br />
            <b>Constitution: -1</b><br />
        </p>,
        spells: [
            {name: "Acid Splash", description: "The Sorcerer shoots a splash of acid from their fingers, dealing 1d6 damage.", available: true},
            {name: "Mage Armor", description: "The Sorcerer surrounds themselves with an arcane armor, giving them +5 to Armor Class", available: true},
            {name: "Magic Missle", description: "The Sorcerer shoots three missiles of magic energy from their fingers, dealing 1d6 damage per missle.", available: true},
            {name: "Elemental Armor", description: "The Sorcerer surrounds themselves with magic energy, protecting them from all elemental damage. The armor absorbs 15 points of elemental damage before dissolving.", available: true},
            {name: "Fly", description: "The Sorcerer gains the ability to fly for ten metres. This spell lasts only 10 seconds.", available: true},
            {name: "Charm", description: "The Sorcerer shoots a circle shaped blue light at their opponent, and if it hits the opponent might be charmed for two rounds. The spell uses a 1d8 + the Sorcerers charisma score versus the opponents willpower modifier.", available: true},
        ],
        hp: 8
    },
    Cleric: {
        stat: {
            wisdom: 2,
            charisma: 2,
            dexterity: -2,
            strength: -1
        },
        information: <p>Clerics are warrior priests of their god, wielding a mix of martial skill and divine spells, mixing healing with damage  <br />
        They get the following benefits/disadvantages: <br />
            <b>Wisdom: +2</b><br />
            <b>Charisma: +2</b><br />
            <b>Dexterity: -2</b><br />
            <b>Strength: -1</b><br />
        </p>,
        spells: [
            {name: "Shimmering Light", description: "The Cleric swoops their weapon in front of them, creating a bright light that has a chance to blind the opponent. The spell uses a 1d6 + the Clerics wisdom modifier vs the opponents perception modidifer.", available: true},
            {name: "Small Healing", description: "The Cleric heals a person or creature of their choice by 1d8.", available: true},
            {name: "Elemental Weapon", description: "The Cleric casts this spell on their weapon, adding 1d4 fire or cold damage to their weapon for two rounds.", available: true},
            {name: "Turn Undead", description: "The Cleric surrounds themselves with holy light and all undead within a ten metres radius might be destroyed. The spell uses a 1d8 + the Clerics wisdom modifier", available: true},
            {name: "Silent Prayer", description: "The Cleric calls out to their god, adding +1 to their attack bonus for three rounds.", available: true},
            {name: "Lift Heavy", description: "The Cleric gains amazing strength by their god, being able to lift extremely heavy objects. The Cleric rolls a 2d12 + their strength modifier to check their strength.", available: true},
        ],
        hp: 10
    },
    Rogue: {
        stat: {
            dexterity: 2,
            charisma: 4,
            constitution: -2,
            wisdom: -1
        },
        information: <p>Rogues are quick of both wit and dexterity, controlling the situation either with their charming personality or by using their thieves skills to get what they need. <br />
        They get the following benefits/disadvantages: <br />
            <b>Dexterity: +2</b><br />
            <b>Charisma: +4</b><br />
            <b>Constitution: -2</b><br />
            <b>Wisdom: -1</b><br />
        </p>,
        spells:  [],
        hp: 10
    },
}

export default Classes;