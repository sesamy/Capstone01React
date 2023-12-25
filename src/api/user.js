import Constants from "../utils/constants.js";

//fetch all users
export const fetchAllUsers = async () => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/users`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch single user
export const fetchSingleUser = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/users/${props.userId}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
