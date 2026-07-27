function sendMessage() {
  let message = document.getElementById("message").value;

  if (message === "") {
    alert("لطفاً یک پیام بنویسید");
    return;
  }

  let chat = document.querySelector(".chat-box");

  chat.innerHTML += "<p>شما: " + message + "</p>";
  chat.innerHTML += "<p>Michael: در حال پردازش پیام شما هستم 🤖</p>";

  document.getElementById("message").value = "";
}