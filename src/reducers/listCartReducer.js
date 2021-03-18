const initialValuesListCart = [];

const ADD_PRODUCT_TO_CHART = 'ADD_PRODUCT_TO_CHART';
const EDIT_JUMLAH_PRODUCT = 'EDIT_JUMLAH_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const listCartReducer = (state = initialValuesListCart, action) => {
  const tempState = [...state];
  switch (action.type) {
    case ADD_PRODUCT_TO_CHART: {
      const { payload } = action;
      if (tempState.some((product) => product.id === payload.id)) {
        alert('Product Udah Ada di cart');
        return tempState;
      }
      tempState.push(payload);
      return tempState;
    }
    case EDIT_JUMLAH_PRODUCT: {
      const { index, jumlah } = action;
      tempState[index].jumlah = jumlah;
      return tempState;
    }
    case DELETE_PRODUCT: {
      const { index } = action;
      tempState.splice(index, 1);
      return tempState;
    }
    default: {
    }
  }

  return state;
};

//action creator
export const addProductToChart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CHART,
    payload,
  };
};

export const editJumlahProduct = ({ index, jumlah }) => {
  return {
    type: EDIT_JUMLAH_PRODUCT,
    index,
    jumlah,
  };
};

export const deleteProductCart = (index) => {
  return {
    type: DELETE_PRODUCT,
    index,
  };
};
export default listCartReducer;
