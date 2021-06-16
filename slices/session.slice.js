import {createSlice} from '@reduxjs/toolkit'

const sessionSlice = createSlice({
    name: 'session',
    initialState: { },
    reducers: {
        setLogin(state, {payload}) {
            return {jwt: payload};
        }
    }
})

export const {setLogin} = sessionSlice.actions;

export default sessionSlice.reducer;
