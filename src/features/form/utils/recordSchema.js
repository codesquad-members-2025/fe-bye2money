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
    const validIds = CATEGORY_TYPES[data.type].map((c) => c.name); // 카테고리가 type에 맞는지 확인 : name(ex: '생활')으로 비교

    if (!validIds.includes(data.category)) {
      ctx.addIssue({
        path: ['category'],
        message: `'${data.category}'는 ${data.type} 카테고리에 해당하지 않습니다`,
        code: z.ZodIssueCode.custom,
      });
    }
  });

export default recordSchema;
