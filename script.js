function sendMessage() {
  let message = document.getElementById("message").value;

  if (message === "") {
    alert("لطفاً یک پیام بنویسید");
    return;
  }

  let chat = document.querySelector(".chat-box");

  chat.innerHTML += `
  <div class="user-message">
    شما: ${message}
  </div>
  `;

  chat.innerHTML += `
  <div class="michael-message">
    Michael: دریافت کردم 🤖
  </div>
  `;

  document.getElementById("message").value = "";
}
function startVoice() {
  alert("🎙️ Michael AI آماده دریافت صداست!");
}