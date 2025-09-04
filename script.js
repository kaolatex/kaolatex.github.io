document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const randomButton = document.getElementById("random-button");
  const resetButton = document.getElementById("reset-button");
  const numberInput = document.getElementById("number-input");
  const resultDiv = document.getElementById("result");
  const historyList = document.getElementById("history-list");
  const chart = document.getElementById("chart");
  const ctx = chart.getContext("2d");

  let history = [];

  findButton.addEventListener("click", calculateFactors);
  randomButton.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 500) + 1;
    numberInput.value = randomNum;
    calculateFactors();
  });

  resetButton.addEventListener("click", () => {
    numberInput.value = "";
    resultDiv.innerHTML = "";
    ctx.clearRect(0, 0, chart.width, chart.height);
  });

  numberInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") calculateFactors();
  });

  function calculateFactors() {
    const inputValue = numberInput.value.trim();
    const number = parseInt(inputValue);

    if (isNaN(number) || number <= 0) {
      resultDiv.innerHTML = `<span style="color: red;">ใส่แค่ตัวเลขเท่านั้นโว้ยย.</span>`;
      ctx.clearRect(0,0,chart.width,chart.height);
      return;
    }

    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) factors.push(i);
    }

    const isPrime = factors.length === 2;
    const isEven = number % 2 === 0;

    // Update result text
    let stepStr = factors.map(f => f).join(" × ");
    resultDiv
