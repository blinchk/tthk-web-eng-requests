document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event) {
    const number = document.querySelector('input[type=number]').value;
    console.log(number);
    
    let url = 'http://api.icndb.com/jokes/random/';
    fetch(url).then( (response) => {

    }).catch(error => {
        console.log(error);
    })
    event.preventDefault();
}