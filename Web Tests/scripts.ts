document.addEventListener('DOMContentLoaded', function(){
    const text = document.querySelector('#text');
    if (text != null){
        text.textContent = 'hi';
    }

    const get_button = document.querySelector('#get_button')
    get_button?.addEventListener('click', function(){
        fetch('http://127.0.0.1:8000/users/',{
            // mode: 'no-cors'
        } )
        .then((response) => response.body)
        .then((data) => console.log(data))
    })

  })