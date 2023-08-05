// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: [],
//     signOut: [],
// };

// const productSlice = createSlice({
//     name: "Product",
//     initialState,
//     reducers: {
//         userData: (state, { payload }) => {
//             state.user = payload;
//             console.log("User Login is Available", payload);
//         },
//         signOut: (state) => {
//             state.user = []; // Set userLogin to an empty array when signing out
//         },
//     },
// });

// export const { userData, signOut } = productSlice.actions;
// export default productSlice.reducer;

// Redux slice
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: null, // Initialize user as null to indicate that the user is not logged in initially
// };

// const productSlice = createSlice({
//     name: "Product",
//     initialState,
//     reducers: {
//         userData: (state, { payload }) => {
//             state.user = payload; // Set the user state to the payload (user data)
//         },
//         signOut: (state) => {
//             state.user = null; // Set user to null when signing out
//         },
//     },
// });

// export const { userData, signOut } = productSlice.actions;
// export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trippyUser: { token: "", firstName: "", lastName: "", email: "" },
};

const features = createSlice({
    name: "e-store",
    initialState,
    reducers: {
        trippyUserLogin: (state, { payload }) => {
            const { firstName, lastName, email, token } = payload;
            state.trippyUser = { token, firstName, lastName, email };
            console.log("User Data:", payload);
        },
        trippyUserLogOut: (state) => {
            // state.trippyUser = { id: "", token: "", name: "", email: "" };
            state.trippyUser = null;
        },
    },
});

export const { trippyUserLogin, trippyUserLogOut } = features.actions;

export default features.reducer;
