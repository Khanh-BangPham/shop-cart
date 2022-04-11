import React from 'react'
import { Link } from 'react-router-dom'
import { ACCOUNT_PATH, HOME_PATH, PRODUCT_PATH } from '../../constants/path'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand" href="./overview.html">
                    Shopper.
                </a>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Nav */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to={HOME_PATH}>Trang chủ</Link>
                            {/* Menu */}
                        </li>
                        <li className="nav-item dropdown position-static">
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to={PRODUCT_PATH}>Sản phẩm</Link>
                            {/* Menu */}
                        </li>
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <a className="nav-link" data-toggle="dropdown" href="#">Câu hỏi thường gặp</a>
                            {/* Menu */}
                        </li>
                        <li className="nav-item dropdown">
                            {/* Toggle */}
                            <a className="nav-link" data-toggle="dropdown" href="#">Liên hệ</a>
                            {/* Menu */}
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                <i className="fe fe-search" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <Link className="nav-link" to={ACCOUNT_PATH}>
                                <i className="fe fe-user" />
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a className="nav-link" href="./account-wishlist.html">
                                <i className="fe fe-heart" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                <span data-cart-items={2}>
                                    <i className="fe fe-shopping-cart" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
