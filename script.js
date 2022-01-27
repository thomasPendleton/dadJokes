const jokeBtn = document.querySelector('.get-joke')

async function getJoke() {
    const result = await fetch('https://icanhazdadjoke.com/', {method: "GET"})
    console.log(result.json());
}

jokeBtn.addEventListener('click', ()=> {
    //Function to get joke from dad joke api
    getJoke()
})