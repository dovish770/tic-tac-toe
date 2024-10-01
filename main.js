// const PORT = process.env.PORT || 3000;
let currentPlayer = 'X';
let active = true;

// const socket = io('http://localhost:3000', {
//     withCredentials: false,
//     transports: ["websocket"]
// });

// const ButtonLogin = document.getElementById('login-button');
// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

// ButtonLogin.addEventListener('click', () => {
//     login(username, password);
// });

// async function login(username, password) {
//     const response = await fetch(`http://localhost:${PORT}/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     });
//     const data = await response.json();
//     if (data.token) {
//         localStorage.setItem('token', data.token);
//         window.location.href = 'http://localhost:3000/home';
//     } else {
//         alert('Invalid username or password');
//     }
// }


const items = document.querySelectorAll('.div-cell');


items.forEach(item => {
    item.addEventListener('click', () => {
        if (active) {
            sendQueryMove(item.id);
        }
    })
    // כאשר העכבר עובר מעל האלמנט
    item.addEventListener('mouseover', () => {
        if (active) {
            item.textContent = currentPlayer 
        }
    });

    // כאשר העכבר עוזב את האלמנט
    item.addEventListener('mouseout', () => {
        if (active) {
            item.textContent = "" 
        }
    });
    });


function sendQueryMove(id){
    console.log(id);
    
    //socket.emit('Move', id);
}


