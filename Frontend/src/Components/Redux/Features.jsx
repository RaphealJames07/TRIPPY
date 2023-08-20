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
    allApiData: [],
    allToursData: [],
    findOneTourData: [],
    trippyHotelData: [],
    trippyFlightData: [],
    trippyCarData: [],
    trippyBookingCart: [],
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
        trippyApiCategories: (state, { payload }) => {
            state.allApiData = payload;
            // console.log('All Category Now working', payload)
        },
        trippyApiTours: (state, { payload }) => {
            state.allToursData = payload;
            // console.log('All Tours Now working', payload)
        },
        findOneTour: (state, { payload }) => {
            state.findOneTourData = payload;
            // console.log('FindOne Tours data Now working', payload)
        },
        updateOneTourData: (state, { payload }) => {
            // Update the findOneTourData state with the new data
            return {
                ...state,
                findOneTourData: payload,
            };
        },
        hotelData: (state, { payload }) => {
            state.trippyHotelData = payload;
            // console.log('Hotel data is available in redux', payload);
        },
        flightData: (state, { payload }) => {
            state.trippyFlightData = payload;
            // console.log('flight data is available in redux', payload);
        },
        carData: (state, { payload }) => {
            state.trippyCarData = payload;
            // console.log('Car data is available in redux', payload);
        },
        bookingData: (state, { payload }) => {
            state.trippyBookingCart.push = payload
            console.log("one added", payload);
        },
        clearBookingData: (state) => {
            state.trippyBookingCart = [];
            state.trippyHotelData = [];
            state.trippyFlightData = [];
            state.trippyCarData = [];
            state.findOneTourData = [];
        },
        clearHotelData: (state) => {
            state.trippyHotelData = [];
        },
        clearFlightData: (state) => {
            state.trippyFlightData = [];
        },
        clearCarData: (state) => {
            state.trippyCarData = [];
            console.log('cleared');
        },
    },
});

export const {
    clearBookingData,
    trippyUserLogin,
    trippyUserLogOut,
    trippyApiCategories,
    trippyApiTours,
    findOneTour,
    updateOneTourData,
    hotelData,
    clearHotelData,
    clearFlightData,
    clearCarData,
    flightData,
    carData,
    bookingData,
} = features.actions;

export default features.reducer;
