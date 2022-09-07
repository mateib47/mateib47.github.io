import React from 'react'
import { runningData } from '../../data'

const Running = () => {
  return (
    <div>
    {
        runningData.activities.map(x => <div>{x.active_duration_ms / 3600000}</div> )
    }
    </div>
  )
}

export default Running