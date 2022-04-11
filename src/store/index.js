import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { productReducer } from "./product";
import rootSga from "./saga";


const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        product: productReducer
    },
    middleware: [saga]
})

saga.run(rootSga)

export default store