import React, { useState } from 'react'

const Card = (props) => {
    const [readmore, setReadmore] = useState(false)

    let description = readmore ? props.player.info : `${props.player.info.substring(0, 150)}...`;
    
    return (
        <div className="card">
            <img className='playerImage' src={props.player.image} alt="playerImage" />
            <div className="playerInfo">
                <div className="playerDetails">
                    <h4 className="playerPrice">{props.player.price}</h4>
                    <h4 className="playerwweName">{props.player.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className='readMore' onClick={() => { setReadmore(!readmore) }}>
                        {readmore ? " ← Show Less" : " Read More →"}
                    </span>
                </div>
            </div>
            <button className='notIntrestedBtn' onClick={() => props.getRemoveId(props.player.id)}>
                🚫 Not Interested
            </button>
        </div>
    )
}

export default Card