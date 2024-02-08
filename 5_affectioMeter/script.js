const calc = document.querySelector(".love-calculator");
const calcBtn = document.getElementById("calc");

calc.addEventListener("submit", () => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["🩷", "💙", "🖤", "🤍"]
  });
});

calc.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submit

  const results = document.getElementById("scorecard");
  results.classList.remove("hidden");

  const you = document.getElementById("you");
  const lover = document.getElementById("lover");
  const compatibility = Math.floor(Math.random() * 100);
  const result = document.createElement("div");
  result.textContent = `${you.value} + ${
    lover.value
  } are ${compatibility}% compatible. ${compatibility > 40 ? "❤️" : "❤️‍🩹"}`;

  results.append(result);

  you.value = "";
  lover.value = "";
});
