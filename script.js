let freeMessages = 25;

async function askMichael(userMessage) {
  // فعلاً پاسخ آزمایشی
  return "سلام! من Michael AI هستم. به‌زودی با هوش مصنوعی واقعی پاسخ می‌دهم. 🤖";
}

async function sendMessage() {
  let message = document.getElementById("message").value;

  if (message === "") {
    alert("لطفاً یک پیام بنویسید");
    return;
  }

  if (freeMessages <= 0) {
    window.location.href = "premium.html";
    return;
  }

  freeMessages--;
  document.getElementById("counter").innerHTML =
    "پیام رایگان: " + freeMessages;

  let chat = document.querySelector(".chat-box");

  chat.innerHTML += `
    <div class="user-message">
      شما: ${message}
    </div>
  `;

  let reply = await askMichael(message);

  chat.innerHTML += `
    <div class="michael-message">
      Michael: ${reply}
    </div>
  `;

  document.getElementById("message").value = "";
}

function startVoice() {
  alert("🎙️ Michael AI آماده دریافت صداست!");
}