import axios from 'axios';
import { AppConstants } from '../@core/Contants';

export const api = axios.create({
    baseURL: AppConstants.URL_WEBSERVICE
})
