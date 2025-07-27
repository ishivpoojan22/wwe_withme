import React from 'react'

const Refresh = (props) => {
  return (
    <div className="refresh">
        <h2>🎭 All Superstars Explored!</h2>
        <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '1rem'}}>
            Ready to discover them again?
        </p>
        <button className="refreshBtn" onClick={() => props.setPlayer(props.data)}>
            🔄 Bring Them Back
        </button>
    </div>
  )
}

export default Refresh;