const { createSlice } = require('@reduxjs/toolkit');

const filterInit = {
  filter: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
