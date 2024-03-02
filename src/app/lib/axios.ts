import axios from 'axios';
import { AppConstants } from '../Contants';

export const api = axios.create({
    baseURL: AppConstants.URL_WEBSERVICE
})
