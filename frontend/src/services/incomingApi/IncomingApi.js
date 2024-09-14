import axios from "axios";

const API_URL = "http://localhost:5000";

export const getIncoming = async () => {
  return await axios.get(`${API_URL}/incoming`);
};

export const deleteIncomingData= async () => {
  return await axios.post(`${API_URL}/deleteIncomingItem`);
}
