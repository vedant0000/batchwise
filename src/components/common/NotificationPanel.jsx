import { notifications } from "../../data/notifications"

export default function NotificationPanel() {
  return (
    <div className="notification-panel">
      <h4>Announcements</h4>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((note, index) => (
          <div key={index} className="notification-item">
            {note}
          </div>
        ))
      )}
    </div>
  )
}