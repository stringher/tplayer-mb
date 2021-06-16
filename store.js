import {configureStore} from "@reduxjs/toolkit";
import SessionReducer from './slices/session.slice'

export default configureStore({
    reducer: {
        session: SessionReducer
    }
});
