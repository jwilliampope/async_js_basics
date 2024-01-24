// const posts = [
//   { title: "POST ONE", body: "Post One text" },
//   { title: "POST TWO", body: "Post Two text" }
// ]

// function getPosts() {
//   setTimeout(() => {
//     let output = ""
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li> <p>${post.body}</p>`
//     })
//     document.body.innerHTML = output
//   }, 1000)
// }

// function createPost(post) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       posts.push(post)
//       const error = false

//       if (!error) {
//         res()
//       } else {
//         rej("ERROR")
//       }
//     }, 2000)
//   })
// }

// createPost({ title: "POST THREE", body: "Post Three text" })
//   .then(getPosts)
//   .catch(err => console.log(err))

const posts = [
  { title: "POST ONE", body: "This is post one." },
  { title: "POST TWO", body: "This is post two." }
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
      const error = true

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
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))
