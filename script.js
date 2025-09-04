document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const numberInput = document.getElementById("number-input");
  const resultDiv = document.getElementById("result");

  findButton.addEventListener("click", calculateFactors);
  numberInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      calculateFactors();
    }
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
      if (number % i === 0) {
        factors.push(i);
      }
    }

    const isPrime = factors.length === 2;

    resultDiv.innerHTML = `
      <p>ตัวประกอบของ ${number}: ${factors.join(", ")}</p>
      <p>${isPrime ? 
        `<span style="color: green;">${number} เป็นจำนวนเฉพาะ!</span>` : 
        `<span style="color: red;">${number} ไม่เป็นจำนวนเฉพาะ.</span>`
      }</p>
    `;
  }
});
