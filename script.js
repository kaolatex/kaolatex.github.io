document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const randomButton = document.getElementById("random-button");
  const resetButton = document.getElementById("reset-button");
  const numberInput = document.getElementById("number-input");
  const resultDiv = document.getElementById("result");

  findButton.addEventListener("click", calculateFactors);

  randomButton.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 500) + 1;
    numberInput.value = randomNum;
    calculateFactors();
  });

  resetButton.addEventListener("click", () => {
    numberInput.value = "";
    resultDiv.innerHTML = "";
  });

  numberInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") calculateFactors();
  });

  function calculateFactors() {
    const inputValue = numberInput.value.trim();
    const number = parseInt(inputValue);

    if (isNaN(number) || number <= 0) {
      resultDiv.innerHTML = `<span style="color: red;">ใส่แค่ตัวเลขเท่านั้นโว้ยย.</span>`;
      return;
    }

    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) factors.push(i);
    }

    const isPrime = factors.length === 2;
    const isEven = number % 2 === 0;

    const stepStr = factors.join(" × ");

    resultDiv.innerHTML = `
      <p><strong>ตัวประกอบ:</strong> ${factors.join(", ")}</p>
      <p><strong>จำนวนตัวประกอบ:</strong> ${factors.length}</p>
      <p><strong>ประเภทเลข:</strong> ${isEven ? "คู่" : "คี่"}</p>
      <p><strong>Prime:</strong> ${isPrime ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ"}</p>
      <p><strong>Step by step:</strong> ${stepStr}</p>
    `;
  }
});
