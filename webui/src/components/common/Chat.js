import React, { useState } from "react"
import { cnb } from "cnbuilder"
import "./Chat.scss"
import vext from "../../util/vext"

let messages = [
  {
    author: "Player 01",
    content: "This was a good game",
    target: "team",
  },
  {
    author: "Player 02",
    content: "I hate this game",
    target: "all",
  },
  {
    author: "Player 03",
    content: "Good job Squad",
    target: "squad",
  },
  {
    author: "Player 04",
    content: "I miss my mommy!",
    target: "all",
  },
  {
    author: "Player 05",
    content: "what the frick",
    target: "squad",
  },
]

export default function Chat() {
  const [input, setInput] = useState("")
  const msgList = document.querySelector(".messages")

  function handleSubmit(e) {
    e.preventDefault()

    if (input === "") {
      return
    }

    const isAtBottom = !(
      msgList.scrollHeight - msgList.scrollTop !==
      msgList.clientHeight
    )

    messages.push({
      author: `Player ${Math.round(Math.random() * 100)}`,
      content: input,
      target: ["all", "team", "squad"][Math.round(Math.random() * 2)],
    })

    vext.DispatchEventLocal(
      "SendChatMessage",
      JSON.stringify({
        target: "all",
        content: input,
      })
    )

    setInput("")

    // wait for DOM update
    setImmediate(() => {
      if (isAtBottom) {
        msgList.scrollTop = msgList.scrollHeight
      }
    })
    // vext.DisableKeyboard()
    e.target.blur()
  }

  return (
    <div className="chat-container">
      <div className="messages">
        <ul className="message-list">
          {messages.map((message, i) => (
            <li
              key={`${message.author}-${i}`}
              className={cnb("chat-message", {
                [`target-${message.target}`]: true,
              })}
            >
              <p>
                <span className="chat-target">
                  [{message.target.toUpperCase()}]{" "}
                </span>
                <span className="chat-author">{message.author}: </span>
                <span className="chat-content">{message.content}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <form className="input" onSubmit={handleSubmit}>
        <label htmlFor="input-messages">SAY ALL:</label>
        <input
          type="text"
          name="input-message"
          id="input-message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // onFocus={vext.EnableKeyboard()}
          // onBlur={vext.DisableKeyboard()}
          autoComplete="off"
          spellCheck="false"
          maxLength="128"
        />
      </form>
    </div>
  )
}
