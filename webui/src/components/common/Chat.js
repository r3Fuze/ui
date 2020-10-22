import React, { useEffect, useState } from "react"
import { cnb } from "cnbuilder"
import Pusher from "pusher-js"
import "./Chat.scss"
import vext from "../../util/vext"

let messagesPlaceholder = [
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

Pusher.logToConsole = true

const pusher = new Pusher("59912fb7e683d0fbaa19", {
  cluster: "eu",
})

const channel = pusher.subscribe("bf3-chat")

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState(messagesPlaceholder)
  const msgList = document.querySelector(".messages")

  useEffect(() => {
    channel.bind("message", (data) => {
      console.log(data)
      setMessages((old) => [
        ...old,
        {
          target: ["all", "team", "squad"][Math.round(Math.random() * 2)],
          ...data,
        },
      ])
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    if (input === "") {
      return
    }

    const isAtBottom = !(
      msgList.scrollHeight - msgList.scrollTop !==
      msgList.clientHeight
    )

    const author = `Player ${Math.round(Math.random() * 100)}`

    // setMessages((old) => [
    //   ...old,
    //   {
    //     author,
    //     content: input,
    //     target: ["all", "team", "squad"][Math.round(Math.random() * 2)],
    //   },
    // ])

    fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        content: input,
      }),
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
