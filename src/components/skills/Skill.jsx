import React, { useState } from 'react'
import './Skill.css'
import { SKILLS } from '../../utils/Data';
import SkillCard from './skillscard/SkillCard';
import SkillInfoCard from './skillcard/SkillInfoCard';

const Skill = () => {
  const[selectedSkill,setSelectedSkill]=useState(SKILLS[0]);
  const handleSelect=(data)=>{
    setSelectedSkill(data);
  }

  return (
    <>
    <section className=' skills-contanier' id='skills'>
        <h5>Technical Profichiency</h5>
        <div className='skills-content'>
          <div className='skills'>
            {SKILLS.map((item)=>(
              <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title===item.title}
              onClick={()=>{
                handleSelect(item);
              }}
              />
            ))}
          </div>
          <div className='skills-info'>
            <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
          </div>
        </div>
    </section>
    </>
  )
}

export default Skill