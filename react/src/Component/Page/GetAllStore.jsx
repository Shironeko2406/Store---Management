import React, { useEffect } from "react";
import Header from "../Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteStoreActionAsync,
  GetAllStoreActionAsync,
  GetStoreByIdActionAsync,
} from "../../Redux/Reducers/StoreReducer.jsx";
import Modal from "../Modal.jsx";

const GetAllStore = () => {
  const { arrStore } = useSelector((state) => state.StoreReducer);
  console.log(arrStore);

  const dispatch = useDispatch();
  useEffect(() => {
    const actionAsync = GetAllStoreActionAsync;
    dispatch(actionAsync);
  }, []);

  const handleDelete = (id) => {
    return () => {
      const actionAsync = DeleteStoreActionAsync(id);
      dispatch(actionAsync);
    };
  };

  const GetStoreById = (id) => {
    return () => {
      const actionAsync = GetStoreByIdActionAsync(id);
      dispatch(actionAsync);
    };
  };

  return (
    <div>
      <div className="container mt-4">
        <h2>Store List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arrStore.map((store) => (
              <tr key={store.id}>
                <td>{store.id}</td>
                <td>{store.name}</td>
                <td>{store.latitude}</td>
                <td>{store.longtitude}</td>
                <td>{store.description}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalId"
                    onClick={GetStoreById(store.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDelete(store.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default GetAllStore;
