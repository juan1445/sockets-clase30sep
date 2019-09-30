const socket = io();

let message_user = document.getElementById('message_user');
let user = document.getElementById('user');
let btn = document.getElementById('send');
let events = document.getElementById('events');
let messages = document.getElementById('messages');

btn.addEventListener('click', function(){
    console.log(user.value+''+message_user.value);
});


