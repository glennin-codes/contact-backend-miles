import axios from "axios";
// *********** Send email
export const SendEmail = async ({
  FirstName,
  LastName,
  email,
  number,
  message,
  setSend,
}) => {
  try {
    const datas = { FirstName, LastName, email, number, message };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
