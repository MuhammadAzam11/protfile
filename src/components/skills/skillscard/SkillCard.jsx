import React from 'react'
import './SkillCard.css'
import { bb, gg } from '../../images'
const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" :""}`}
    onClick={()=>onClick()}
    >
        <div className='skill-icon'>
            <img src={bb} alt={title}/>
        </div>
        <span>{title}</span>

    </div>
  )
}

export default SkillCard