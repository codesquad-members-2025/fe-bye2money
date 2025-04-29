# 📄 API 사용법 정리 (GET / POST / PATCH / DELETE)

## ✅ API 기본 주소

```
http://localhost:3001/records
```

## ✅ 공통 규칙

| 항목           | 설명                                                                    |
| :------------- | :---------------------------------------------------------------------- |
| id 관리        | 숫자 기반(id: 1, 2, 3, ...) 자동 증가                                   |
| createdAt 생성 | 클라이언트(React)에서 `new Date().toISOString()`으로 직접 생성하여 전송 |
| 필터링/정렬    | 쿼리 스트링(Query String)으로 year, month, date 등 사용 가능            |

---

## ✅ 1. GET (조회)

### 전체 조회

```
GET /records
```

### 특정 년/월 조회

```
GET /records?year=2025&month=04
```

### 특정 년/월 + 날짜 내림차순 정렬

```
GET /records?year=2025&month=04&_sort=date&_order=desc
```

---

## ✅ 2. POST (새로운 데이터 추가)

### 요청

```
POST /records
```

### 요청 Body 예시

```json
{
  "date": "2025-06-01",
  "type": "expense",
  "category": "식비",
  "description": "점심 식사",
  "amount": 13000,
  "paymentMethod": "신한카드",
  "year": "2025",
  "month": "06",
  "createdAt": "2025-06-01T00:00:00Z"
}
```

✅ id는 보내지 않아도 됩니다. 서버가 자동으로 숫자 id를 부여합니다.

---

## ✅ 3. PATCH (특정 데이터 수정)

### 요청

```
PATCH /records/:id
```

예시:

```
PATCH /records/5
```

### 요청 Body 예시 (부분 수정)

```json
{
  "description": "저녁 외식"
}
```

✅ 수정하고 싶은 필드만 보내면 됩니다.  
✅ createdAt은 수정할 필요 없이 그대로 유지합니다.

---

## ✅ 4. DELETE (특정 데이터 삭제)

### 요청

```
DELETE /records/:id
```

예시:

```
DELETE /records/5
```

✅ id에 해당하는 데이터가 완전히 삭제됩니다.

---

## ✅ 에러 처리

- 서버 응답이 `!response.ok`일 경우 에러 핸들링 필요
- 기본적으로 404, 500 같은 HTTP 에러는 json-server에서도 발생할 수 있음

---

## ✅ 주의사항 요약

| 주의할 점                      | 설명                                                  |
| :----------------------------- | :---------------------------------------------------- |
| id는 숫자로 관리               | `"1"` (문자열 ❌) → 숫자 `1`, `2`, `3`... 형태로 관리 |
| createdAt 직접 생성            | POST할 때 React에서 생성 (`new Date().toISOString()`) |
| year, month 필수               | 조회 및 정렬에 사용                                   |
| 정렬할 때 \_sort, \_order 사용 | 날짜 내림차순 필요시 `_sort=date&_order=desc` 추가    |

---

## ✅ API 흐름 요약 다이어그램

```
GET /records?year=YYYY&month=MM         → 년월별 데이터 조회
POST /records                           → 새 데이터 추가 (createdAt 포함)
PATCH /records/:id                      → 특정 데이터 일부 수정
DELETE /records/:id                     → 특정 데이터 삭제
```
