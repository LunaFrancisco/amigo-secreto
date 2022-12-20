import axios from 'axios';

export const createContestApi = async (contest: any) => {
    const data =  await axios.post('https://localhost:7114/api/Contest', contest);
    console.log("create contest", data);
    return data;
}
