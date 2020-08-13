import React from 'react';

const Races = {
    Isen: {
        name: "Isen",
        special: "Resistance to Cold +5,Will +1",
        story:
            <p>Isens are a former slave race turned warrior race, known for their people-focused republic and determination. <br/>
            In Isen society every person is valued highly and it's alien to many other races on how the Isens always make sure that
            every citizen is a part of the nations well being, just as the nation is highly responsible for its citizens well being.<br/>
            Many Isens have dark hair and pale skin, well adjusted to the cold of Nathira, their homeland.
            </p>,
    },
    Dether: {
        name: "Dether",
        special: "Resistance to Fire +5,Armor Class +1",
        story: <p>Dethers are said to be descendants of dragons, but considering that it's been many generations since anyone has seen a dragon, if they ever did. <br/>
                The Dethers do however have a small shimmer of scales on their skin that can be seen when looked upon really closely. These scales make them more resistant to damage, both physical and fire. <br/>
                Dethern society is strongly hierarchical monarchy and at the top are the nobles with their riches.
            </p>,
    },
    Guldan: {
        name: "Guldan",
        special: "Sneak +5,Crafting +1",
        story: <p>Guldans are a dwarven race from the southern forrests of Therassia, a nation called 'Gold Woods'. Their skin is dark, a slight golden brown, and
            they are often clad in light garments, prioriting moving freely rather than heavy armor. <br/>
            Their society is monarchical but rather than based on lineage, their queen or king is selected by a trial called 'The Hunting'.<br/>
            Guldans are highly adaptable to their environment and know how to use it to their best benefit.
        </p>,
    },
    Elithin: {
        name: "Elithin",
        special: "Magic Resistance +5,Intelligence Checks +1",
        story: <p>Elithins are high elves and said to be the oldest race of Therassia, though some recent discoveries have made some scholar starting to question this idea. <br/>
        The Elithins are tall and value art and magic highly. Their society is a military magic based empire governed by commitées chosen from their strength in art of magic. <br />
        Their natural capacity for magic has also made them resistance to it.
        </p>,
    },
}

export default Races;