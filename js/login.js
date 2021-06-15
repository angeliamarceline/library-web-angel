function loadPage{path, id) {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const href = protocol + "//" + host + path;
    const goToRegis = document.getElementById(id);
    goToRegis.onclick = (e) => {
        e.preventDefault();
        window.location.assign(href);
    };

    console.log(protocol);
    console.log(host);
    console.log(href);
}

function login() {
    const email = document.getElementById("email").value;
    console.log(email);
    if (email == 'admin') {
        const protocol = window.location.protocol;
        const host = window.location.host;
        const href = protocol + "//" + host + path;
        const goToRegis = document.getElementById(id);
        goToRegis.onclick = (e) => {
            e.preventDefault();
            window.location.assign(href);
        };
    }
}