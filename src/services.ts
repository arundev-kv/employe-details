import AsyncStorage from "@react-native-community/async-storage";
import { EMPLOYEE_DATA, EMPLOYEE_DATA_URL } from "./constants";

export const dataFetch = () => {
    return fetch(EMPLOYEE_DATA_URL).then((response) => response.json())
}

export const storeEmployeeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
};

export const getEmployeeData = async (key: string) => {
    try {
        const data = await AsyncStorage.getItem(key).then(req => JSON.parse(req)).then(json => json);
        if (data !== null) {
            return data;
        } else {
            return dataFetch().then((initialData) => {
                storeEmployeeData(EMPLOYEE_DATA, JSON.stringify(initialData));
                return initialData;

            });
        }
    } catch (e) {
        console.log(e);
    }
};