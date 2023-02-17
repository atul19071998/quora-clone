import React from 'react'
import "../componentcss/Notification.css"
const  Notification =()=> {
  return (
    <div className="notification-wrapper">
      <div className="notify-wrap">
        <div className="notify-wrap1">
            <div className="notifying1"></div>
            <div className="notifying2">
                <div className="filter">Filters</div>
                <hr/>
                <div className="notify">All Notifications</div>
                <div className="notify1">
                    <ul>
                        <li>Stories</li>
                        <li>Questions</li>
                        <li>Spaces</li>
                        <li>People updates</li>
                        <li>Comments and mentions</li>
                        <li>Upvotes</li>
                        <li>Your content</li>
                        <li>Your Profile</li>
                        <li>Announcements 1</li>
                        <li>Earnings</li>
                        <li>Subscription</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="notify-wrap2"></div>
        <div className="notify-wrap3"></div>
      </div>
    </div>
  )
}

export default Notification
