document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const numberInput = document.getElementById("number-input");
  const resultDiv = document.getElementById("result");

  // สร้างปุ่ม Random และ Reset ใน DOM
  const buttonSection = document.createElement("div");
  buttonSection.classList.add("button-section");
  
  const randomBtn = document.createElement("button");
  randomBtn.textContent = "สุ่มเลข";
  buttonSection.appendChild(randomBtn);
  
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "รีเซ็ท";
  buttonSection.appendChild(resetBtn);

  // เพิ่มปุ่มเข้ากับ body หลัง input
  const inputContainer = numberInput.parentElement;
  inputContainer.insertAdjacentElement("afterend", buttonSection);

  // ปุ่ม Find
  findButton.addEventListener("click", calculateFactors);

  // ปุ่ม Random
  randomBtn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 500) + 1;
    numberInput.value = randomNum;
    calculateFactors();
  });

  // ปุ่ม Reset
  resetBtn.addEventListener("click", () => {
    numberInput.value = "";
    resultDiv.innerHTML = "";
  });

  // กด Enter ใน input
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
      <p><strong>ตัวประกอบ:</strong> <span class="factors">${factors.join(", ")}</span></p>
      <p><strong>จำนวนตัวประกอบ:</strong> ${factors.length}</p>
      <p><strong>ประเภทเลข:</strong> <span class="${isEven ? 'even' : 'odd'}">${isEven ? "คู่" : "คี่"}</span></p>
      <p><strong>Prime:</strong> <span class="${isPrime ? 'prime' : 'not-prime'}">${isPrime ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ"}</span></p>
      <p><strong>Step by step:</strong> <span class="step">${stepStr}</span></p>
    `;

    // animation
    resultDiv.classList.remove("animate");
    void resultDiv.offsetWidth;
    resultDiv.classList.add("animate");
  }
});
