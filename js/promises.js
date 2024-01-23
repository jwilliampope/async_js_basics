const posts = [
  { title: "POST ONE", body: "Post One text" },
  { title: "POST TWO", body: "Post Two text" }
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

createPost({ title: "POST THREE", body: "Post Three text" })
  .then(getPosts)
  .catch(err => console.log(err))
