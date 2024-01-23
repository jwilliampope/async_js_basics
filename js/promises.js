const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" }
]

function getPosts() {
  setTimeout(() => {
    let output = ""
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li> <p>${post.body}</p>`
    })
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post)

      const error = false

      if (!error) {
        res()
      } else {
        rej("ERROR")
      }
    }, 2000)
  })
}

createPost({ title: "Post Three", body: "This is Post Three" })
  .then(getPosts)
  .catch(err => console.log(err))
