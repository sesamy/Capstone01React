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

//fetch limited results from users
export const fetchLimitedUsers = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/users?limit=${props.limit}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch sorted users
export const fetchSortedUsers = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/users?sort=${props.sort}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//add a new user
export const addNewUser = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        email: `${props.email}`,
        username: `${props.username}`,
        password: `${props.password}`,
        name: {
          firstname: `${props.firstName}`,
          lastname: `${props.lastName}`,
        },
        address: {
          city: `${props.city}`,
          street: `${props.street}`,
          number: `${props.number}`,
          zipcode: `${props.zipCode}`,
          geolocation: { lat: `${props.lat}`, long: `${props.long}` },
        },
        phone: `${props.phone}`,
      }),
    });
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
