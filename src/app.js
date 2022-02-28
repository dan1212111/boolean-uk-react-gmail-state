import Header from './components/header'
import { useState } from 'react'
import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails)

  const toggleStar = (email) => {
    const emailList = [...emails]
    const starEmail = emailList.find(emailS => emailS === email)
    starEmail.starred = !starEmail.starred
    setEmails(emailList)
  }

  const toggleRead = (email) => {
    const emailList = [...emails]
    const readEmail = emailList.find(emailR => emailR === email)
    readEmail.read = !readEmail.read
    setEmails(emailList)
  }


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
            <span className="count">?</span>
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
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails.map((email, index) => (
        <li className="email" key={index}>
          <div className="select">
            <input className="select-checkbox"
            type="checkbox"
            onClick = {(e) => toggleRead(email)}
            />
          </div>
          <div className="star">
            <input
            className="star-checkbox"
            type="checkbox"
            onClick = {(e) => toggleStar(email)}
            />
          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
        </li>
      ))}</main>
    </div>
  )
}

export default App

