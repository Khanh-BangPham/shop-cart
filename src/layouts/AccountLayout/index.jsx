import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { ACCOUNT_ADDRESS_PATH, ACCOUNT_ORDER_PATH, ACCOUNT_PATH, ACCOUNT_PAYMENT_PATH, ACCOUNT_WISHLIST_PATH } from '../../constants/path'

export default function AccountLayout() {
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <nav className="mb-10 mb-md-0">
                            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                <NavLink className="list-group-item list-group-item-action dropright-toggle" to={ACCOUNT_ORDER_PATH}>
                                    Orders
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_WISHLIST_PATH}>
                                    Wishlist
                                </NavLink>
                                <NavLink end className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_PATH}>
                                    Personal Info
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_ADDRESS_PATH}>
                                    Addresses
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_PAYMENT_PATH}>
                                    Payment Methods
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle" to="/logout">
                                    Logout
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
}
