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

export const fetchSingleProduct = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/products/${props.id}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const sortFetchResults = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/products?sort=${props.sort}`);
    //default is ascending
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchAllCategories = async () => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/products/categories`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOneCategory = async (category) => {
  try {
    const rsp = await fetch(
      `${Constants.API_URL}/products/category/${category}`
    );
    const result = await rsp.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const addProduct = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/products`, {
      method: "POST",
      body: JSON.stringify({
        title: `${props.title}`,
        price: `${props.price}`,
        description: `${props.description}`,
        image: `${props.image}`,
        category: `${props.category}`,
      }),
    });
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
