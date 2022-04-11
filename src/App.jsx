import { AppProvier } from "./core"
import { Routes, Route } from 'react-router-dom'
import Page404 from "./pages/404"
import ProductList from "./pages/product"
import ProductDetail from "./pages/product/[slug]"
import Home from "./pages"
import MainLayout from './layouts/MainLayout'
import store from "./store"
import { ACCOUNT_ADDRESS_DETAIL_PATH, ACCOUNT_ADDRESS_PATH, ACCOUNT_ORDER_DETAIL_PATH, ACCOUNT_ORDER_PATH, ACCOUNT_PATH, ACCOUNT_PAYMENT_DETAIL_PATH, ACCOUNT_PAYMENT_PATH, ACCOUNT_WISHLIST_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from "./constants/path"
import AccountLayout from "./layouts/AccountLayout"
import PersonalInfo from "./pages/account"
import OrderList from "./pages/account/order"
import OrderDetail from "./pages/account/order/[id]"
import AddressList from "./pages/account/address"
import AddressDetail from "./pages/account/address/[id]"
import PaymentList from "./pages/account/payment-method"
import PaymentDetail from "./pages/account/payment-method/[id]"
import Wishlist from "./pages/account/wishlist"
import './assets/style/custom.scss'

function App() {
  return (
    <AppProvier store={store}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PRODUCT_PATH} element={<ProductList />} />
          <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetail />} />

          <Route path={ACCOUNT_PATH} element={<AccountLayout />}>
            <Route index element={<PersonalInfo />} />
            <Route path={ACCOUNT_WISHLIST_PATH} element={<Wishlist />} />

            <Route path={ACCOUNT_ORDER_PATH} element={<OrderList />} />
            <Route path={ACCOUNT_ORDER_DETAIL_PATH} element={<OrderDetail />} />

            <Route path={ACCOUNT_ADDRESS_PATH} element={<AddressList />} />
            <Route path={ACCOUNT_ADDRESS_DETAIL_PATH} element={<AddressDetail />} />

            <Route path={ACCOUNT_PAYMENT_PATH} element={<PaymentList />} />
            <Route path={ACCOUNT_PAYMENT_DETAIL_PATH} element={<PaymentDetail />} />

          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </AppProvier>
  )
}

export default App
