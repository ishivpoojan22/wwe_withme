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
                <h2 className="title">About WWE Superstar</h2>
            </div>

            <div className="cardsContainer">
                {
                    props.players.map((player) => {
                        return <Card player={player} getRemoveId = {getId}/>
                    })
                }
            </div>
        </div>
    )
}

export default Players
