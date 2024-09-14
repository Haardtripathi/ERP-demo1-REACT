import axios from "axios";

const API_URL = "http://localhost:5000";

export const getWorkbook = async () => {
  return await axios.get(`${API_URL}/workbook`);
};

export const deleteWorkbookData = async () => {
  return await axios.post(`${API_URL}/deleteWorkbookItem`);
};
