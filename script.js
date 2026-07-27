let freeMessages = 25;

async function askMichael(userMessage) {
  // اینجا بعداً به هوش مصنوعی واقعی وصل می‌شویم
  return "سلام! من Michael AI هستم. به‌زودی با هوش مصنوعی واقعی پاسخ می‌دهم. 🤖";
}

async function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.querySelector(".chat-box");

  const message = input.value.trim();

  if (!message) {
    alert("لطفاً یک پیام بنویسید.");
    return;
  }

  if (freeMessages <= 0) {
    window.location.href = "premium.html";
    return;
  }

  freeMessages--;
  document.getElementById("counter").textContent =
    "پیام رایگان: " + freeMessages;

  chat.innerHTML += `
    <div class="user-message">
      <strong>شما:</strong><br>
      ${message}
    </div>
  `;

  input.value = "";

  const reply = await askMichael(message);

  chat.innerHTML += `
    <div class="michael-message">
      <strong>Michael:</strong><br>
      ${reply}
    </div>
  `;

  chat.scrollTop = chat.scrollHeight;
}

function startVoice() {
  alert("🎙️ قابلیت گفتگوی صوتی Michael AI به‌زودی فعال می‌شود.");
}

document.getElementById("message").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});