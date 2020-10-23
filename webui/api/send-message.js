const Pusher = require("pusher")

const pusher = new Pusher({
  appId: "1095508",
  key: "59912fb7e683d0fbaa19",
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
})

module.exports = async (req, res) => {
  const { author, content } = req.body

  await pusher.trigger("bf3-chat", "message", {
    author,
    content,
  })

  res.status(200).end("ok")
}
