import { useContext } from 'react';
import ModalContext from '../../context/modalContext';

const useModal = () => useContext(ModalContext);

export default useModal;
