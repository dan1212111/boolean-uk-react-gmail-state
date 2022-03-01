import Header from "./components/header"
import { useState } from "react"
import initialEmails from "./data/emails"

import "./styles/app.css"

function App() {
  // Use initialEmails for state
  // console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails)
  const [hiddenEmails, setHideEmail] = useState(false)

  const getUnReadEmail = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)
  const [currentTab, setCurrentTab] = useState('inbox')

  function checkInbox() {
    const num = emails.length
    return num
  }

  const toggleRead = (event, email) => {
    if (event === true) {
      const emailList = [...emails]
      const findEmail = emailList.find((emailF) => emailF === email)
      findEmail.read = true
      setEmails(emailList)
      console.log(event, email)
    }
    if (event === false) {
      const emailList = [...emails]
      const findEmail = emailList.find((emailF) => emailF === email)
      findEmail.read = false
      setEmails(emailList)
      console.log(event, email)
    }
  }

  const toggleStar = (event, email) => {
    if (event === true) {
      const emailList = [...emails]
      const findEmail = emailList.find((emailF) => emailF === email)
      findEmail.starred = true
      setEmails(emailList)
      console.log(event, email)
    }
    if (event === false) {
      const emailList = [...emails]
      const findEmail = emailList.find((emailF) => emailF === email)
      findEmail.starred = false
      setEmails(emailList)
      console.log(event, email)
    }
  }

  let filteredEmails = emails
  if (hiddenEmails && currentTab === 'starred') {
    const starredEmails = getStarredEmails(emails)
    filteredEmails = getUnReadEmail(starredEmails)
  } else if (hiddenEmails) {
    filteredEmails = getUnReadEmail(emails)
  } else if (currentTab === 'starred') {
    filteredEmails = getStarredEmails(emails)
  }



  /////// HIDE read emails

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{checkInbox()}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked= {hiddenEmails}
              onClick={(e) => setHideEmail(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <div className="read">
          {/* /////////// how to change this to use diffent arrays? */}
          {filteredEmails.map((email) => (
            <li className={`email ${email.read ? 'read' : 'unread'}`}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  onClick={(e) => toggleRead(e.target.checked, email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  onClick={(e) => toggleStar(e.target.checked, email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
