import type {AppDispatch, AppSelector} from '../store';
import {useSelector, useDispatch} from 'react-redux';

const useAppSelector: AppSelector = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export {useAppSelector, useAppDispatch};
