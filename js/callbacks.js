const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post One", body: "This is Post One" }
]

function getPosts() {
  setTimeout(() => {
    let output = ""
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li> <p>${post.body} </p>`
    })
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

createPost({ title: "Post Three", body: "This is Post Three" }, getPosts)
