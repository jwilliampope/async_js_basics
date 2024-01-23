const posts = [
  { title: "POST ONE", body: "Hello from post one." },
  { title: "POST ONE", body: "Hello from post one." }
]

function getPosts() {
  setTimeout(() => {
    let output = ""
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li> <p>${post.body}</p> <br>`
    })
    document.body.innerHTML = output
  }, 1000)
}

getPosts()
