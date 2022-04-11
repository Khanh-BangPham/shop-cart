import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

export function AppProvier({ children, store }) {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    )
}
