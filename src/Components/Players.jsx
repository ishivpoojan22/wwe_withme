import React from 'react'
import Card from './Card.jsx';

const Players = (props) => {
    function getId(id)
    {
        props.removePlayer(id);
    }

    return (
        <div className='container'>
            <div>
                <h1 className="title">🏆 WWE SUPERSTARS SHOWCASE</h1>
            </div>

            <div className="cardsContainer">
                {
                    props.players.map((player, index) => {
                        return <Card key={player.id} player={player} getRemoveId={getId}/>
                    })
                }
            </div>
        </div>
    )
}

export default Players
