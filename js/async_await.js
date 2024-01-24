const posts = [
  { title: "Post One", body: "Post One Text", note: "This is Post One" },
  { title: "Post One", body: "Post One Text", note: "This is Post Two" }
]

function getPosts() {
  setTimeout(() => {
    let output = ""
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li> <p>${post.body}</p> <p>${post.note}</p>`
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

// ASYNC / AWAIT
// async function init() {
//   await createPost({ title: "POST THREE", body: "This is post three." })

//   getPosts()
// }

// init()

// ASYNC / AWAIT / FETCH
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const data = await res.json()

  console.log(data)
}

fetchUsers()
