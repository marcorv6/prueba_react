import React from 'react'
import styles from './CountdownCircle.module.css'

function CountdownCircle({time = 0, title = 'DIAS'}) {
  let formattedTime = time.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  return (
    <div className={`${styles.circle}`}>
      <div>
        <div className={`${styles.time} text-center`}>{formattedTime}</div>  
        <div className={`${styles.title} text-center`}>{title}</div>  
      </div>
    </div>
  )
}

export default CountdownCircle