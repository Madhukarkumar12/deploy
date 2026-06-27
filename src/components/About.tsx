import './About.css'

interface AboutProps {
  bio: string
}

function About({ bio }: AboutProps) {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{bio}</p>
    </section>
  )
}

export default About
