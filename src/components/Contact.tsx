import './Contact.css'

interface ContactLink {
  name: string
  url: string
}

interface ContactProps {
  links: ContactLink[]
}

function Contact({ links }: ContactProps) {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
