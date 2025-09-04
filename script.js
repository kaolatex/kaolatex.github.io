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
      showResult(`<span style="color: red;">ใส่แค่ตัวเลขเท่านั้น!</span>`);
      return;
    }

    if (number > 1000000) {
      showResult(`<span style="color: orange;">เลขใหญ่เกินไป! (สูงสุด 1,000,000)</span>`);
      return;
    }

    const factors = new Set();
    const sqrtNum = Math.floor(Math.sqrt(number));

    for (let i = 1; i <= sqrtNum; i++) {
      if (number % i === 0) {
        factors.add(i);
        factors.add(number / i);
      }
    }

    const sortedFactors = Array.from(factors).sort((a, b) => a - b);
    const isPrime = sortedFactors.length === 2;

    const resultHTML = `
      <p><strong>ตัวประกอบของ ${number}:</strong></p>
      <p>${sortedFactors.join(", ")}</p>
      <p>${isPrime ? 
        `<span style="color: lime;">✔ ${number} เป็นจำนวนเฉพาะ!</span>` : 
        `<span style="color: red;">✘ ${number} ไม่เป็นจำนวนเฉพาะ.</span>`}</p>
    `;

    showResult(resultHTML);
  }

  function showResult(html) {
    resultDiv.innerHTML = html;
    resultDiv.classList.remove("show");
    void resultDiv.offsetWidth; // รีเซ็ต animation
    resultDiv.classList.add("show");
  }
});
