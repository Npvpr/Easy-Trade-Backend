document.addEventListener('DOMContentLoaded', function () {
    var text = document.querySelector('#text');
    if (text != null) {
        text.textContent = 'hi';
    }
    var get_button = document.querySelector('#get_button');
    get_button === null || get_button === void 0 ? void 0 : get_button.addEventListener('click', function () {
        fetch('https://easy-trade-app.herokuapp.com/users/', {
        // mode: 'no-cors'
        })
            .then(function (response) { return console.log(response.body); });
    });
});
