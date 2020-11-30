document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event) {
    const number = document.querySelector('input[type=number]').value;
    
    let url = 'http://api.icndb.com/jokes/random/';
    if (number > 0) {
        url += number;
    }

    fetch(url).then( (response) => {
        return response.json();
    })
    .then(data => {
        let output = '';
        if (data.value.length > 0) {
            data.value.forEach(value => {
                output += `<li>${value.joke}</li>`
            });
        }
        else {
            output = data.value.joke;
        }
        
        document.querySelector('.jokes').innerHTML = output;
    })
    .catch(error => {
        console.log(error);
    })
    event.preventDefault();
}