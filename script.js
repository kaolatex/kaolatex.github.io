document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const numberInput = document.getElementById("number-input");
  const resultDiv = document.getElementById("result");

  // กดปุ่มคำนวณ
  findButton.addEventListener("click", calculateFactors);

  // กด Enter ใน input
  numberInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") calculateFactors();
  });

  function calculateFactors() {
    const inputValue = numberInput.value.trim();
    const number = parseInt(inputValue);

    // ตรวจสอบว่าตัวเลขถูกต้อง
    if (isNaN(number) || number <= 0) {
      resultDiv.innerHTML = `<span style="color: red;">ใส่แค่ตัวเลขเท่านั้นโว้ยย.</span>`;
      return;
    }

    // หา factors
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) factors.push(i);
    }

    const isPrime = factors.length === 2;
    const isEven = number % 2 === 0;

    const stepStr = factors.join(" × ");

    // สร้าง HTML ผลลัพธ์
    resultDiv.innerHTML = `
      <p><strong>ตัวประกอบ:</strong> <span class="factors">${factors.join(", ")}</span></p>
      <p><strong>จำนวนตัวประกอบ:</strong> ${factors.length}</p>
      <p><strong>ประเภทเลข:</strong> <span class="${isEven ? 'even' : 'odd'}">${isEven ? "คู่" : "คี่"}</span></p>
      <p><strong>Prime:</strong> <span class="${isPrime ? 'prime' : 'not-prime'}">${isPrime ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ"}</span></p>
      <p><strong>Step by step:</strong> <span class="step">${stepStr}</span></p>
    `;

    // เพิ่ม animation เด้ง ๆ
    resultDiv.classList.remove("animate"); // รีเซ็ต animation
    void resultDiv.offsetWidth; // trigger reflow
    resultDiv.classList.add("animate");
  }
});
