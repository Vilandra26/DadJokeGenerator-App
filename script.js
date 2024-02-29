const btnEl = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('joke');
const apiKey = 'KINQEv9DFzaNwFu/Mb2Lwg==jf3wEuCVuSHjU7qc';
const options = {
    method: 'GET',
    headers:{
        'X-Api-Key': apiKey,
    },
};
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
    try {
        jokeEl.innerText = 'Loading...';
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        jokeEl.innerText = data[0].joke;
        btnEl.disabled = false;
        btnEl.innerText = 'Get Another Joke';
            
    } catch (error) {
        jokeEl.innerText = 'An error occurred.';
        btnEl.disabled = false;
        btnEl.innerText = 'Please try again.';
    }
}

btnEl.addEventListener('click', getJoke);