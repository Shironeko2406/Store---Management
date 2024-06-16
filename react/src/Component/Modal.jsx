// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   UpdateStoreByIdActionAsync,
//   resetArrStoreByIdAction,
// } from "../Redux/Reducers/StoreReducer";
// import { useFormik } from "formik";

// const Modal = () => {
//   const { arrStoreById } = useSelector((state) => state.StoreReducer);
//   console.log(arrStoreById);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(resetArrStoreByIdAction());
//     };
//   }, [dispatch]);

//   const formUpdateStore = useFormik({
//     initialValues: {
//       id: "",
//       name: "",
//       alias: "",
//       latitude: "",
//       longtitude: "",
//       description: "",
//       image: "",
//       deleted: true,
//     },
//     onSubmit: (valueUpdate) => {
//       console.log(valueUpdate);
//       // const actionAsync = UpdateStoreByIdActionAsync(value);
//       // dispatch(actionAsync);
//     },
//   });

//   return (
//     <div>
//       {/* Modal trigger button */}
//       <button
//         type="button"
//         className="btn btn-primary btn-lg d-none"
//         data-bs-toggle="modal"
//         data-bs-target="#modalId"
//       >
//         Launch
//       </button>

//       {/* Modal Body */}
//       <div
//         className="modal fade"
//         id="modalId"
//         tabIndex={-1}
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         role="dialog"
//         aria-labelledby="modalTitleId"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
//           role="document"
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="modalTitleId">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <form onSubmit={formUpdateStore.handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="id" className="form-label">
//                     ID
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="id"
//                     name="id"
//                     defaultValue={arrStoreById.id}
//                     onChange={formUpdateStore.handleChange}
//                     readOnly
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     defaultValue={arrStoreById.name}
//                     onChange={formUpdateStore.handleChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="alias" className="form-label">
//                     Alias
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="alias"
//                     name="alias"
//                     defaultValue={arrStoreById.alias}
//                     onChange={formUpdateStore.handleChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="latitude" className="form-label">
//                     Latitude
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="latitude"
//                     name="latitude"
//                     defaultValue={arrStoreById.latitude}
//                     onChange={formUpdateStore.handleChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="longitude" className="form-label">
//                     Longitude
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="longitude"
//                     name="longitude"
//                     defaultValue={arrStoreById.longtitude}
//                     onChange={formUpdateStore.handleChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="description" className="form-label">
//                     Description
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="description"
//                     name="description"
//                     defaultValue={arrStoreById.description}
//                     onChange={formUpdateStore.handleChange}
//                   ></textarea>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="image" className="form-label">
//                     image
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="image"
//                     name="image"
//                     defaultValue={arrStoreById.image}
//                     onChange={formUpdateStore.handleChange}
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateStoreByIdActionAsync,
  resetArrStoreByIdAction,
} from "../Redux/Reducers/StoreReducer";
import { useFormik } from "formik";

const Modal = () => {
  const { arrStoreById } = useSelector((state) => state.StoreReducer);
  console.log(arrStoreById);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetArrStoreByIdAction());
    };
  }, [dispatch]);

  const formUpdateStore = useFormik({
    initialValues: {
      id: "",
      name: "",
      alias: "",
      latitude: "",
      longtitude: "",
      description: "",
      image: "",
      deleted: true,
    },
    onSubmit: (valueUpdate) => {
      console.log(valueUpdate);
      const actionAsync = UpdateStoreByIdActionAsync(
        valueUpdate.id,
        valueUpdate
      );
      dispatch(actionAsync);
    },
  });

  useEffect(() => {
    if (arrStoreById) {
      formUpdateStore.setValues({
        id: arrStoreById.id || "",
        name: arrStoreById.name || "",
        alias: arrStoreById.alias || "",
        latitude: arrStoreById.latitude || "",
        longtitude: arrStoreById.longtitude || "",
        description: arrStoreById.description || "",
        image: arrStoreById.image || "",
        deleted: arrStoreById.deleted || true,
      });
    }
  }, [arrStoreById]);

  return (
    <div>
      {/* Modal trigger button */}
      <button
        type="button"
        className="btn btn-primary btn-lg d-none"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        Launch
      </button>

      {/* Modal Body */}
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={formUpdateStore.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={formUpdateStore.values.id}
                    onChange={formUpdateStore.handleChange}
                    readOnly
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
                    value={formUpdateStore.values.name}
                    onChange={formUpdateStore.handleChange}
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
                    value={formUpdateStore.values.alias}
                    onChange={formUpdateStore.handleChange}
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
                    value={formUpdateStore.values.latitude}
                    onChange={formUpdateStore.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="longitude" className="form-label">
                    Longitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    name="longtitude"
                    value={formUpdateStore.values.longtitude}
                    onChange={formUpdateStore.handleChange}
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
                    value={formUpdateStore.values.description}
                    onChange={formUpdateStore.handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={formUpdateStore.values.image}
                    onChange={formUpdateStore.handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
