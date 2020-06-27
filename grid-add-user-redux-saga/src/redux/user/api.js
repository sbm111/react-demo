import axios from "axios";
import Data from './Constatnt'

export const fetchAll = ( ) => {
    return axios.get(Data.getAllItems);
}

export const saveUserData = (data) =>{
    return axios.post(Data.getAllItems,data)
}