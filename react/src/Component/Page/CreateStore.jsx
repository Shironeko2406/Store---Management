import React, { useState } from "react";
import { useFormik } from "formik";
import { CreateStoreActionAsync } from "../../Redux/Reducers/StoreReducer";
import { useDispatch } from "react-redux";

const CreateStore = () => {
  const dispatch = useDispatch();
  const formCreateStore = useFormik({
    initialValues: {
      id: 1,
      name: "",
      alias: "",
      latitude: "",
      longtitude: "",
      description: "",
      image: "",
      deleted: true,
    },
    onSubmit: (value) => {
      console.log(value);
      const actionAsync = CreateStoreActionAsync(value);
      dispatch(actionAsync);
    },
  });

  return (
    <div className="container mt-4">
      <h2>Create Store</h2>
      <form onSubmit={formCreateStore.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            onChange={formCreateStore.handleChange}
            readOnly
            placeholder="Id dc tạo tự động"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alias" className="form-label">
            Alias
          </label>
          <input
            type="text"
            className="form-control"
            id="alias"
            name="alias"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            name="latitude"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longtitude" className="form-label">
            Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="longtitude"
            name="longtitude"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={formCreateStore.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStore;
