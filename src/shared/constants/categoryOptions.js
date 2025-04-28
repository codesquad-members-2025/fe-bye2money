const CATEGORY_TYPES = {
  income: [
    { id: 'salary', name: '월급' },
    { id: 'allowance', name: '용돈' },
    { id: 'etc', name: '기타 수입' },
  ],
  expense: [
    { id: 'living', name: '생활' },
    { id: 'food', name: '식비' },
    { id: 'transport', name: '교통' },
    { id: 'shopping', name: '쇼핑/뷰티' },
    { id: 'medical', name: '의료/건강' },
    { id: 'leisure', name: '문화/여가' },
    { id: 'uncategorized', name: '미분류' },
  ],
};

export default CATEGORY_TYPES;
