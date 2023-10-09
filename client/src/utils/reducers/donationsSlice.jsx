import { createSlice } from '@reduxjs/toolkit';

const donationsSlice = createSlice({
  name: 'donations',
  initialState: [],
  reducers: {
    updateDonations: (state, action) => {
      return action.payload;
    },
  }
});

export const { actions, reducer } = donationsSlice;
export default reducer;
