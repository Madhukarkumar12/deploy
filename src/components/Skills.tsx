import './Skills.css'

interface SkillsProps {
  skills: string[]
}

function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills
