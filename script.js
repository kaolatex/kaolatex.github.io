document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  // --- Tab Switch ---
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      contents.forEach(c => c.classList.remove("active"));
      document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
    });
  });

  // --- ตัวประกอบ ---
  document.getElementById("factor-button").addEventListener("click", () => {
    const num = parseInt(document.getElementById("factor-input").value);
    if (isNaN(num) || num <= 0) return show("factor-result", "กรุณาใส่ตัวเลขที่ถูกต้อง");
    const factors = new Set();
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.add(i);
        factors.add(num / i);
      }
    }
    const list = Array.from(factors).sort((a,b) => a-b);
    const prime = list.length === 2 ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ";
    show("factor-result", `
      <strong>ตัวประกอบของ ${num}</strong><br>
      ${list.join(", ")}<br>
      <span style="color:${list.length===2?'lime':'red'}">${prime}</span>
    `);
  });

  // --- สูตรคูณ ---
  document.getElementById("multiply-button").addEventListener("click", () => {
    const n = parseInt(document.getElementById("multiply-input").value);
    if (isNaN(n) || n <= 0) return show("multiply-result", "กรุณาใส่ตัวเลขที่ถูกต้อง");
    let table = `<strong>สูตรคูณแม่ ${n}</strong><br>`;
    for (let i = 1; i <= 12; i++) {
      table += `${n} × ${i} = ${n*i}<br>`;
    }
    show("multiply-result", table);
  });

  // --- เช็คจำนวนเฉพาะ ---
  document.getElementById("prime-button").addEventListener("click", () => {
    const num = parseInt(document.getElementById("prime-input").value);
    if (isNaN(num) || num <= 1) return show("prime-result", "ต้องมากกว่า 1");
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) { isPrime = false; break; }
    }
    show("prime-result", `${num} ${isPrime ? "เป็นจำนวนเฉพาะ" : "ไม่เป็นจำนวนเฉพาะ"}`);
  });

  // --- GCD & LCM ---
  document.getElementById("gcd-button").addEventListener("click", () => {
    const a = parseInt(document.getElementById("gcd-a").value);
    const b = parseInt(document.getElementById("gcd-b").value);
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0)
      return show("gcd-result", "กรุณาใส่ตัวเลขที่ถูกต้องทั้งสองช่อง");

    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x, y) => (x * y) / gcd(x, y);

    show("gcd-result", `
      GCD(${a}, ${b}) = ${gcd(a,b)}<br>
      LCM(${a}, ${b}) = ${lcm(a,b)}
    `);
  });

  function show(id, html) {
    const el = document.getElementById(id);
    el.innerHTML = html;
  }
});
