const fs = require("fs");

const filePath = "./db.json";

// 1. 파일 읽기
const raw = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(raw);

function normalizeDate(item) {
  const [year, month, day] = item.regDate.split(".").map(Number);
  return { ...item, year, month, day };
}

// 2. 변환
data.transactions = data.transactions.map(normalizeDate);

// 3. 덮어쓰기
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

console.log("날짜 분리 완료!");
