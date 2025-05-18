
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
 
  appCode: string; // Input code for authentication
  isAuthenticated: boolean; // Authentication state
  error: string | null; // Error messages, if any
}

const initialState: UserState = {
 
  appCode: "", // Initialize as empty string
  isAuthenticated: false, // Default to not authenticated
  error: null, // No error by default
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAppCode: (state, action: PayloadAction<string>) => {
      state.appCode = action.payload;
    },
    authenticate: (state) => {
      const correctCode = "Dridez786@@##"; // Hardcoded correct code
      if (state.appCode === correctCode) {
        state.isAuthenticated = true;
        alert("Code is correct!");
      } else {
        alert("Code is incorrect. Please try again.");
        state.appCode = ""; // Reset the code
      }
    },
  
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAppCode,
  authenticate,
 
  setError,
} = userSlice.actions;

export default userSlice.reducer;
