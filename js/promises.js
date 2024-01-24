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

// createPost({ title: "POST THREE", body: "This is post three." })
//   .then(getPosts)
//   .catch(err => console.log(err))

// Promise.all instead of the above block
const promise1 = Promise.resolve("RESOLVED")
const promise2 = 200
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "COMPLETED"))
const promise4 = fetch("http://jsonplaceholder.typicode.com/users").then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))
