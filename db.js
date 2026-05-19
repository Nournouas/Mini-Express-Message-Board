const links = [
  {href: "/", text: "Home"},
  {href: "/new", text: "New Message"},
]

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Unknown",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello",
    user: "Michael",
    added: new Date(),
  }
]

module.exports = {links, messages}