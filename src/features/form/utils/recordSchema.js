import { z } from 'zod';
import CATEGORY_TYPES from '../../../shared/constants/categoryOptions';

const recordSchema = z
  .object({
    date: z.string().min(1, '날짜를 입력해주세요'),
    type: z.enum(['income', 'expense'], {
      message: '수입/지출을 선택해주세요',
    }),
    amount: z.number().min(1, '1원 이상 입력해주세요'),
    description: z
      .string()
      .min(1, '내용을 입력해주세요')
      .max(32, '32자 이내로 입력해주세요'),
    paymentMethod: z.string().min(1, '결제수단을 입력해주세요'),
    category: z.string().min(1, '카테고리를 입력해주세요'),
  })
  .superRefine((data, ctx) => {
    const validIds = CATEGORY_TYPES[data.type].map((c) => c.name);

    if (!validIds.includes(data.category)) {
      ctx.addIssue({
        path: ['category'],
        message: `'${data.category}'는 ${data.type} 카테고리에 해당하지 않습니다`,
        code: z.ZodIssueCode.custom,
      });
    }

    // 🔥 추가: 날짜 유효성 체크
    const datePattern = /^\d{4}\.\d{2}\.\d{2}$/;
    if (!datePattern.test(data.date)) {
      ctx.addIssue({
        path: ['date'],
        message: '날짜 형식이 올바르지 않습니다 (YYYY.MM.DD)',
        code: z.ZodIssueCode.custom,
      });
      return;
    }

    const [year, month, day] = data.date.split('.').map(Number);
    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      ctx.addIssue({
        path: ['date'],
        message: '존재하지 않는 날짜입니다',
        code: z.ZodIssueCode.custom,
      });
    }
  });

export default recordSchema;
