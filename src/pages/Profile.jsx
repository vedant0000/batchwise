import { useAuth } from "../context/AuthContext"
import { useApp } from "../context/AppContext"
import "../styles/profile.css"

export default function Profile() {
  const { user } = useAuth()
  const { posts = [] } = useApp()

  // Filter posts created by this user
  const userPosts = posts.filter(p => p.authorId === user?.id)

  if (!user) return null

  return (
    <div className="profile-page">

      {/* HEADER */}
      <div className="profile-header">

        <div className="profile-avatar">
          {user?.name?.[0]}
        </div>

        <div className="profile-info">

          <h2>{user.name}</h2>

          <div className="profile-stats">
            <span><b>{userPosts.length}</b> posts</span>
            <span><b>{user.followers}</b> followers</span>
            <span><b>{user.following}</b> following</span>
          </div>

          <p className="profile-bio">{user.bio}</p>

          <div className="profile-meta">
            <span>🎓 {user.passoutYear}</span>
            <span>⭐ {user.contributions} contributions</span>
          </div>
        </div>
      </div>


      {/* POSTS GRID */}
      <div className="profile-posts">
        {userPosts.length === 0 ? (
          <p className="no-posts">No posts yet</p>
        ) : (
          userPosts.map(post => (
            <div key={post.id} className="profile-post-card">
              <h4>{post.title}</h4>
              <p>{post.content?.slice(0, 80)}...</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
