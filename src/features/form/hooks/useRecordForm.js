import { useReducer, useState, useMemo, useCallback } from 'react';
import formReducer from '../reducers/formReducer';
import { deepEqual } from '../../../shared/utils/record';

const ACTIONS = {
  CHANGE_FIELD: 'CHANGE',
  INITIALIZE_FORM: 'INIT',
  RESET_FORM: 'RESET',
};

export default function useRecordForm({ schema, initialState, onSave }) {
  const [formValues, dispatch] = useReducer(formReducer, initialState);
  const [originalRecord, setOriginalRecord] = useState(null);

  const validation = useMemo(
    () => schema.safeParse(formValues),
    [formValues, schema]
  );

  const isEditing = Boolean(originalRecord);

  const isValid = useMemo(
    () =>
      isEditing ? !deepEqual(formValues, originalRecord) : validation.success,
    [formValues, isEditing, originalRecord, validation.success]
  );

  const onChange = useCallback((field, value) => {
    dispatch({ type: ACTIONS.CHANGE_FIELD, field, value });
  }, []);

  const onInit = useCallback((record) => {
    setOriginalRecord(record);
    dispatch({ type: ACTIONS.INITIALIZE_FORM, payload: record });
  }, []);

  const onReset = useCallback(() => {
    setOriginalRecord(null);
    dispatch({ type: ACTIONS.RESET_FORM, initialState });
  }, [initialState]);

  const onSubmit = useCallback(async () => {
    if (!isValid) return;
    await onSave({ formValues, isEditing });
    onReset();
  }, [isValid, onSave, formValues, isEditing, onReset]);

  return {
    formValues,
    originalRecord,
    isEditing,
    isValid,
    onChange,
    onInit,
    onReset,
    onSubmit,
  };
}
