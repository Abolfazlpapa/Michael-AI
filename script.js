let freeMessages = 25;
function sendMessage() {
  let message = document.getElementById("message").value;

  if (message === "") if (freeMessages <= 0) {
  window.location.href = "premium.html";
  return;
}
}

freeMessages--;
document.getElementById("counter").innerHTML = "پیام رایگان: " + freeMessages;
    alert("لطفاً یک پیام بنویسید");
    return;
  }

  let chat: document.querySelector(".chat-box");

  chat.innerHTML += `
  <div class="user-message">
    شما: ${message}
  </div>
  `;

  chat.innerHTML += `
  <div class="michael-message">
    let replies = [
  "سلام! من مایکل هستم 🤖",
  "در حال بررسی پیام شما هستم.",
  "جالبه! بیشتر توضیح بده.",
  "من آماده کمک به شما هستم 🚀"
];

let randomReply = replies[Math.floor(Math.random() * replies.length)];

chat.innerHTML += `
<div class="michael-message">
Michael: ${randomReply}
</div>
`;
  </div>
  `;

  document.getElementById("message").value = "";
}
function startVoice() {
  alert("🎙️ Michael AI آماده دریافت صداست!");
}