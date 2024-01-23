const posts = [
  { title: "post one", body: "POST ONE " },
  { title: "post two", body: "POST TWO" }
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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

createPost({ title: "post three", body: "POST THREE" }, getPosts)
