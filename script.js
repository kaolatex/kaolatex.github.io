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

    resultDiv.innerHTML = `
      <p>ตัวประกอบของ ${number}: ${factors.join(", ")}</p>
      <p>มีทั้งหมด ${factors.length} ตัว</p>
      <p>${isEven ? "เป็นเลขคู่" : "เป็นเลขคี่"}</p>
      <p>${isPrime ? 
        `<span style="color: lime;">${number} เป็นจำนวนเฉพาะ!</span>` : 
        `<span style="color: red;">${number} ไม่เป็นจำนวนเฉพาะ.</span>`
      }</p>
    `;
  }
});
