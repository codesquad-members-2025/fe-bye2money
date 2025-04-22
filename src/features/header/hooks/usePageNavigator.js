import { useParams, useNavigate } from 'react-router-dom';
import {
  isValidYear,
  isValidMonth,
} from '../../../shared/utils/dateValidation';
import getYearMonth from '../../../shared/utils/getYearMonth';
import { PAGE_TYPES } from '../../../shared/constants/pageTypes';

export default function usePageNavigator() {
  const navigate = useNavigate();
  const { year, month } = useParams();
  const { year: fallbackYear, month: fallbackMonth } = getYearMonth(new Date());

  const currentYear = isValidYear(year) ? year : fallbackYear;
  const currentMonth = isValidMonth(month) ? month : fallbackMonth;

  const navigateTo = (pageType) => {
    if (!PAGE_TYPES.includes(pageType)) {
      throw new Error(`Invalid page type: ${pageType}`);
    }

    navigate(`/${pageType}/${currentYear}/${currentMonth}`);
  };

  return { navigateTo };
}
