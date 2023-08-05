// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./Features"; // Import the correct path for productReducer

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, PERSIST } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import MyReducer from "./Features";

// const persistconfig = {
//     key: "root",
//     storage,
// };

// const persisitedReducer = persistReducer(persistconfig, MyReducer);

// export const store = configureStore({
//     reducer: { persisitedReducer },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [PERSIST],
//             },
//         }),
// });

// Assuming this is your current file
// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, PERSIST } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import MyReducer from "./Features"; // Make sure this path is correct

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, MyReducer);

// export const Store = configureStore({
//     reducer: { persistedReducer },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [PERSIST],
//             },
//         }),
// });

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import trippyReducer from "./Features";

const persistConfig = {
    key: "root",
    storage: storage,
};
//   export const rootReducers = combineReducers({
//     commerce: eCommerce,
//   })
const persistedReducer = persistReducer(persistConfig, trippyReducer);

const store = configureStore({
    reducer: { Trippy: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
setupListeners(store.dispatch);

export default store;
