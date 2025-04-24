function normalizeDate(regDate) {
  const [year, month, day] = regDate.split(".").map(Number);
  return { year, month, day };
}

function handleChange(e, onChange) {
  const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 8); // 숫자만 입력 (최대 8자리)

  // 자리수 기반 유효성 필터링
  if (onlyNums.length >= 5) {
    const m1 = onlyNums[4];
    if (m1 !== "0" && m1 !== "1") return;
  }

  if (onlyNums.length >= 6) {
    const m1 = onlyNums[4];
    const m2 = onlyNums[5];
    if (
      (m1 === "0" && (m2 < "1" || m2 > "9")) ||
      (m1 === "1" && (m2 < "0" || m2 > "2"))
    )
      return;
  }

  if (onlyNums.length >= 7) {
    const d1 = onlyNums[6];
    if (d1 < "0" || d1 > "3") return;
  }

  if (onlyNums.length === 8) {
    const d1 = onlyNums[6];
    const d2 = onlyNums[7];

    const day = parseInt(d1 + d2, 10);
    const month = parseInt(onlyNums.slice(4, 6), 10);
    const year = parseInt(onlyNums.slice(0, 4), 10);

    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return; // 날짜 유효하지 않으면 무시
    }
  }

  let formatted = onlyNums;
  if (onlyNums.length > 4 && onlyNums.length <= 6) {
    formatted = `${onlyNums.slice(0, 4)}.${onlyNums.slice(4)}`;
  } else if (onlyNums.length > 6) {
    formatted = `${onlyNums.slice(0, 4)}.${onlyNums.slice(
      4,
      6
    )}.${onlyNums.slice(6)}`;
  }

  const normalizedDate = normalizeDate(formatted);
  onChange({ regDate: formatted, ...normalizedDate });
}

export { handleChange, normalizeDate };
