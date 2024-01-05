import Constants from "../utils/constants.js";

export const userLogin = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${props.username}`,
        password: `${props.password}`,
      }),
    });
    const result = await rsp.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};
