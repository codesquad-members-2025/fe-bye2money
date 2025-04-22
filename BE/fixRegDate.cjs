const fs = require("fs");
const path = "./db.json";

const data = JSON.parse(fs.readFileSync(path, "utf8"));

data.transactions = data.transactions.map((item) => {
  const date = new Date(item.regDate);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return {
    ...item,
    regDate: `${yyyy}.${mm}.${dd}`,
  };
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");

console.log("✅ regDate 변환 완료!");
