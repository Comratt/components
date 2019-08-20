import React from 'react'
import IconSVG from './icon.svg'

const Icon = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${IconSVG})`,
        height: '24px',
        width: '24px'
      }}>

    </div>
  )
}

export default Icon;
