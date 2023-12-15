import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const getFilter = ({ filter }) => filter;
export const getFilter = state => state.filter.filter;
