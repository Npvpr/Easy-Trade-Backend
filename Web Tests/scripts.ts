document.addEventListener('DOMContentLoaded', function(){
    const text = document.querySelector('#text');
    if (text != null){
        text.textContent = 'hi';
    }

    const get_button = document.querySelector('#get_button')
    get_button?.addEventListener('click', function(){
        fetch('https://easy-trade-app.herokuapp.com/users/',{
            // mode: 'no-cors'
        } )
        .then((response) => console.log(response.body))
    })

  })