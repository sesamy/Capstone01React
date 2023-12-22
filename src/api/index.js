import Constants from "../utils/constants.js";

//fetch all products
export const fetchAllProducts = async () => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/products`);

    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
