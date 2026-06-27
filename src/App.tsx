import './App.css'
import ProfileHeader from './components/ProfileHeader'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const profileData = {
    name: 'Your Name',
    title: 'Your Title / Role',
    avatarUrl: '',
    bio: 'A brief introduction about yourself. You can talk about your interests, experience, or anything you want to share.',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
    contactLinks: [
      { name: 'GitHub', url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
      { name: 'Email', url: 'mailto:you@example.com' }
    ]
  }

  return (
    <div className="app">
      <ProfileHeader 
        name={profileData.name} 
        title={profileData.title} 
        avatarUrl={profileData.avatarUrl}
      />
      <About bio={profileData.bio} />
      <Skills skills={profileData.skills} />
      <Contact links={profileData.contactLinks} />
    </div>
  )
}

export default App
