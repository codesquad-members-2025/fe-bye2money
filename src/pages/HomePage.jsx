import { useReducer, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  postRecordToServer,
  patchRecordToServer,
  deleteRecordFromServer,
} from '../shared/api/recordsApi';
import useCurrentYearMonthNumber from '../shared/hooks/useCurrentYearMonthNumber';
import { isSameYearMonth, getTimestamp } from '../shared/utils/date';
import { deepEqual } from '../shared/utils/record';
import initialFormState from '../features/form/reducers/initialFormState';
import formReducer from '../features/form/reducers/formReducer';
import recordSchema from '../features/form/utils/recordSchema';
import Form from '../features/form';
import Record from '../features/record';

function HomePage() {
  const { currentYear, currentMonth } = useCurrentYearMonthNumber();
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [originalFormData, setOriginalFormData] = useState(null);
  const { records, dispatch: recordDataDispatch } = useOutletContext();

  const validationResult = recordSchema.safeParse(formData);
  const isFormValid = validationResult.success;

  const isSubmitEnabled = useMemo(() => {
    const isEditMode = originalFormData !== null;

    return isEditMode ? !deepEqual(formData, originalFormData) : isFormValid;
  }, [formData, originalFormData]);

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleReset = () => {
    setOriginalFormData(null);
    dispatch({ type: 'RESET_FORM' });
  };

  const handleEdit = (record) => {
    setOriginalFormData(record);
    dispatch({ type: 'INIT_EDIT', payload: record });
  };

  const buildRecordToSend = (formData, isEditMode) => {
    const [year, month] = formData.date.split('-');

    return {
      ...formData,
      id: isEditMode ? formData.id : undefined,
      createdAt: isEditMode ? formData.createdAt : getTimestamp(new Date()),
      year,
      month,
    };
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    const isEditMode = originalFormData !== null;

    const isInCurrentMonth = isSameYearMonth(
      currentYear,
      currentMonth,
      formData.date
    );

    const recordToSend = buildRecordToSend(formData, isEditMode);

    try {
      const response = isEditMode
        ? await patchRecordToServer(recordToSend)
        : await postRecordToServer(recordToSend);
      const savedRecord = response;

      recordDataDispatch({
        type: isEditMode ? 'UPDATE_RECORD' : 'ADD_RECORD',
        payload: { record: savedRecord, isInCurrentMonth },
      });

      handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (recordId, isEditing) => {
    try {
      await deleteRecordFromServer(recordId);

      recordDataDispatch({ type: 'DELETE_RECORD', payload: recordId });

      if (isEditing) handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        isFormValid={isSubmitEnabled}
      />
      <Record
        recordData={records}
        onSelect={handleEdit}
        onDelete={handleDelete}
        editingId={originalFormData?.id ?? null}
      />
    </>
  );
}

export default HomePage;
