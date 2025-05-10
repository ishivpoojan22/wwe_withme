import React from 'react'

const Refresh = (props) => {
  return (
    <div className="refresh">
        <h2>no player left</h2>
        <button className="refreshBtn" onClick={() => props.setPlayer(props.data)}>
            Refresh
        </button>
    </div>
  )
}

export default Refresh;