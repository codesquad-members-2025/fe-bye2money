import { useParams, useNavigate, useLocation } from 'react-router-dom';
import buildUrlWithPage from '../../../shared/utils/buildUrlWithPage';

function useMonthNavigator() {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const buildNewPath = (monthOffset) => {
    const currentMonthNumber = parseInt(month, 10);
    const currentYearNumber = parseInt(year, 10);

    const updatedDate = new Date(
      currentYearNumber,
      currentMonthNumber - 1 + monthOffset
    );

    const updatedYear = updatedDate.getFullYear();
    const updatedMonth = String(updatedDate.getMonth() + 1).padStart(2, '0');

    const segments = pathname.split('/').filter(Boolean);
    const pagePath = segments[0];
    return buildUrlWithPage(updatedYear, updatedMonth, pagePath);
  };

  const goToNextMonth = () => navigate(buildNewPath(1));
  const goToPreviousMonth = () => navigate(buildNewPath(-1));

  return { goToNextMonth, goToPreviousMonth };
}

export default useMonthNavigator;
