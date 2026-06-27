import './ProfileHeader.css'

interface ProfileHeaderProps {
  name: string
  title: string
  avatarUrl?: string
}

function ProfileHeader({ name, title, avatarUrl }: ProfileHeaderProps) {
  return (
    <header className="profile-header">
      {avatarUrl && <img src={avatarUrl} alt="Profile" className="avatar" />}
      <h1>{name}</h1>
      <p className="title">{title}</p>
    </header>
  )
}

export default ProfileHeader
