import Constants from "../utils/constants.js";

//fetch all carts
export const fetchAllCarts = async () => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch a single cart by ID
export const fetchSingleCart = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts/${props}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch a certain number of carts
export const fetchSomeCarts = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts?limit=${props.limit}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch sorted carts
export const fetchSortedCarts = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts?sort=${props.sort}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch carts by date
export const fetchCartsByDate = async (props) => {
  try {
    const rsp = await fetch(
      `${Constants.API_URL}/carts?startdate=${props.startDate}&enddate=${props.endDate}`
    );
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//get cart by userID
export const fetchCartByUser = async ({ userId }) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts/user/${userId}`);
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//create a new cart by adding a product
export const addProductToCart = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts`, {
      method: "POST",
      body: JSON.stringify({
        userId: `${props.userId}`,
        date: `${props.date}`,
        products: [
          {
            productId: `${props.productId}`,
            quantity: `${props.productQuantity}`,
          },
        ],
      }),
    });
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//update product in the cart
export const updateProductInCart = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts/${props.cartId}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 3,
        date: `${props.date}`,
        products: [
          {
            productId: `${props.productId}`,
            quantity: `${props.productQuantity}`,
          },
        ],
      }),
    });
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//delete a cart
export const deleteCart = async (props) => {
  try {
    const rsp = await fetch(`${Constants.API_URL}/carts/${props.cartId}`, {
      method: "DELETE",
    });
    const result = await rsp.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
