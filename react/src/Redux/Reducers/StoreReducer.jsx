import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrStore: [
    {
      id: 1,
      name: "Khải Sneaker",
      alias: "khai-sneaker",
      latitude: "10.771663",
      longtitude: "106.669631",
      description: "379 sư vạn hạnh quận 10",
      image:
        "https://apistore.cybersoft.edu.vn/images/https://localhost:44366/images/store1.jpg",
      deleted: false,
    },
  ],
  arrStoreById: [],
};

const StoreReducer = createSlice({
  name: "StoreReducer",
  initialState,
  reducers: {
    setArrStoreAction: (state, action) => {
      state.arrStore = action.payload;
    },
    setArrStoreByIdAction: (state, action) => {
      state.arrStoreById = action.payload;
    },
    resetArrStoreByIdAction: (state) => {
      state.arrStoreById = [];
    },
  },
});

export const {
  setArrStoreAction,
  setArrStoreByIdAction,
  resetArrStoreByIdAction,
} = StoreReducer.actions;

export default StoreReducer.reducer;

//--------------Action async-----------
export const GetAllStoreActionAsync = async (dispatch) => {
  const res = await axios.get(
    "https://apistore.cybersoft.edu.vn/api/Store/getAll"
  );

  const action = setArrStoreAction(res.data.content);
  dispatch(action);
};

export const CreateStoreActionAsync = (store) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Store",
        store,
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      console.log(res.data.content);
      // Nếu cần, bạn có thể dispatch một action khác ở đây để cập nhật state của Redux nếu cần.
      const actionAsyncGetAllStore = GetAllStoreActionAsync;
      dispatch(actionAsyncGetAllStore);
    } catch (error) {
      console.error("Error creating store:", error);
      // Xử lý lỗi nếu cần.
    }
  };
};

export const DeleteStoreActionAsync = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        "https://apistore.cybersoft.edu.vn/api/Store",
        { data: [id] }
      );
      console.log(res.data.content);
      const actionAsyncGetAllStore = GetAllStoreActionAsync;
      dispatch(actionAsyncGetAllStore);
    } catch (error) {
      console.error("Error deleting store:", error);
      // Handle the error if needed.
    }
  };
};

export const GetStoreByIdActionAsync = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Store/getbyid?id=${id}`
      );
      console.log(res.data.content);
      const action = setArrStoreByIdAction(res.data.content);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

export const UpdateStoreByIdActionAsync = (id, storeUpdate) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `https://apistore.cybersoft.edu.vn/api/Store?id=${id}`,
        storeUpdate,
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      console.log(res.data.content);
      const actionAsyncGetAllStore = GetAllStoreActionAsync;
      dispatch(actionAsyncGetAllStore);
    } catch (error) {
      console.error(error);
    }
  };
};
