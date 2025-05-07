import { useOutletContext } from 'react-router-dom';
import {
  postRecordToServer,
  patchRecordToServer,
  deleteRecordFromServer,
} from '../shared/api/recordsApi';
import useCurrentYearMonthNumber from '../shared/hooks/useCurrentYearMonthNumber';
import { isSameYearMonth } from '../shared/utils/date';
import { buildRecordToSend } from '../shared/utils/record';

import useRecordForm from '../features/form/hooks/useRecordForm';
import initialFormState from '../features/form/reducers/initialFormState';
import recordSchema from '../features/form/utils/recordSchema';

import HomeLayout from '../layouts/HomeLayout';
import Form from '../features/form';
import Record from '../features/record';

function HomePage() {
  const { currentYear, currentMonth } = useCurrentYearMonthNumber();
  const { records, dispatch: recordDataDispatch } = useOutletContext();
  const {
    formValues,
    originalRecord,
    isEditing,
    isValid,
    onChange,
    onInit,
    onReset,
    onSubmit,
  } = useRecordForm({
    schema: recordSchema,
    initialState: initialFormState,
    onSave: handleSubmit,
  });

  async function handleSubmit() {
    const isInCurrentMonth = isSameYearMonth(
      currentYear,
      currentMonth,
      formValues.date
    );

    const recordToSend = buildRecordToSend(formValues, isEditing);

    try {
      const response = isEditing
        ? await patchRecordToServer(recordToSend)
        : await postRecordToServer(recordToSend);
      const savedRecord = response;

      recordDataDispatch({
        type: isEditing ? 'UPDATE_RECORD' : 'ADD_RECORD',
        payload: { record: savedRecord, isInCurrentMonth },
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (recordId, isEditing) => {
    try {
      await deleteRecordFromServer(recordId);

      recordDataDispatch({ type: 'DELETE_RECORD', payload: recordId });

      if (isEditing) onReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeLayout>
      <Form
        formData={formValues}
        onChange={onChange}
        onSubmit={onSubmit}
        onReset={onReset}
        isFormValid={isValid}
      />
      <Record
        recordData={records}
        onSelect={onInit}
        onDelete={handleDelete}
        editingId={originalRecord?.id ?? null}
      />
    </HomeLayout>
  );
}

export default HomePage;
