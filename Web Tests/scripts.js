document.addEventListener('DOMContentLoaded', function () {
    var text = document.querySelector('#text');
    if (text != null) {
        text.textContent = 'hi';
    }
    var get_button = document.querySelector('#get_button');
    get_button === null || get_button === void 0 ? void 0 : get_button.addEventListener('click', function () {
        fetch('http://127.0.0.1:8000/users/', {
        // mode: 'no-cors'
        })
            .then(function (response) { return response.body; })
            .then(function (data) { return console.log(data); });
    });
});
