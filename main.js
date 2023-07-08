const login = document.querySelector("#login");
const password = document.querySelector("#password");
const submit = document.querySelector(".submit");
const span = document.querySelector(".span");
const form = document.querySelector('form')
let createElem = document.createElement("p");
let createMessage = document.createElement("p");
let users = {};

function User(login, password) {
  this.login = login;
  this.password = password;
}

function creatingId(users) {
  return Object.keys(users).length;
}

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let loginUser = login.value;
  let passwordUser = password.value;

  let user = new User(loginUser, passwordUser);

  const userId = "User" + creatingId(users);
  users[userId] = user;

  function errorMessage(message) {
    
    createElem.innerHTML = message
    createElem.classList.add("errorPassword");
    
    user = "";
    setTimeout(() => {
      createElem.remove();
      submit.removeAttribute("disabled");
      submit.value = 'Create profile'
    }, 2000);
  }

  if (passwordUser.length < 5) {
    errorMessage('Введите пожалуйста больше чем 4 значения в поле "Password"');
    span.before(createElem);
    if (submit.hasAttribute("disabled")) {
      console.log("yes");
    } else {
      submit.setAttribute("disabled", true);
      submit.value = 'Wait!'
    }
  } else {
        alert(`Логин :${user.login},Пароль:${user.password}`)
        document.getElementById('password').value = "";


        createMessage.classList.add('messageThank');
        createMessage.textContent = `Thank you for your registration!(мы перенаправим вас через 3 c )`;
        form.before(createMessage)
    setTimeout(() => {
        createMessage.remove()
        window.location.href = 'index.html'
    },3000)
    
    
  }
  if (false) {
    errorMessage('Это имя пользователя занято введите пожайлуста другое!')
    login.after(createElem)
  } else {
    console.log(user)
  }
});
