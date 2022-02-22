
function fetchPage() {
    fetch('navbar.html').then(function (response) {
        response.text().then(function (text) {
            document.querySelector('navbar').innerHTML = text;
        })
    });
}