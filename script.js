const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')

// With promises
// generateJoke()
// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json() )
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//      })
// }

//With Async Await
getJoke()
async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const result = await fetch('https://icanhazdadjoke.com/', config)
  const data = await result.json()
  jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', () => {
  //Function to get joke from dad joke api
  //promise function
  //   generateJoke()
  // async function call
  getJoke()
})
