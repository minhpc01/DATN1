import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { fetchCart, fetchInfoOrder, fetchOrderConfirm } from "../service/cartService"

const ConfirmPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const [productCheckout, setProductCheckout] = useState({ checkout: [], shipping: 0, totalMoney: 0 })
    const [infoOrder, setInfoOrder] = useState({})
    var shipping = 0
    var tt = 0
    let idAccount = sessionStorage.getItem("idAccount")
    let username = sessionStorage.getItem("username")

    useEffect(() => {
        if (!username) {
            navigate("/login?redirect=/thank-you")
        }
        //fetchCartF()
        fetchOrderFunc()

    }, [])
    let inforOrder
    const fetchOrderFunc = async () => {
        //alert('me')
        let res = await fetchInfoOrder({ idAccount })
        console.log('res fetch order thankyou: ', res.data.DT)
        //setInfoOrder(res.data.DT[0])
        inforOrder = res.data.DT[0]
        setProductCheckout({
            ...productCheckout,
            checkout: [...res.data.DT],
            shipping: res.data.DT[0].Shipping.value,
            totalMoney: res.data.DT.reduce((total, currentValue, currentIndex) => (total + res.data.DT[currentIndex].Products.price * res.data.DT[currentIndex].Products.Cart_Detail.qty), res.data.DT[0].Shipping.value)
        })
        console.log('infor order: ', inforOrder)
    }
    return (
        <>
            {/* <!-- Start Banner Area --> */}
            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Confirmation</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Confirmation</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area -->

	<!--================Order Details Area =================--> */}
            <section class="order_details section_gap">
                <div class="container">
                    <h3 class="title_confirmation">Cảm ơn bạn. Đơn đặt hàng của bạn đã được xác nhận.</h3>
                    <div class="row order_d_inner">
                        <div class="col-lg-4">
                            <div class="details_item">
                                <h4>Thông tin hóa đơn</h4>
                                <ul class="list">
                                    {/* <li><a href="#"><span>Mã đơn hàng</span> : { }</a></li>
                                    <li><a href="#"><span>Tên</span> : {inforOrder.firstname}</a></li>
                                    <li><a href="#"><span>Họ</span> :{inforOrder.lastname}</a></li>
                                    <li><a href="#"><span>SDT</span> : {inforOrder.phone}</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="details_item">
                                <h4>Địa chỉ thanh toán</h4>
                                <ul class="list">
                                    {/* <li><a href="#"><span>Địa chỉ</span> : {inforOrder.address}</a></li>
                                    <li><a href="#"><span>Xã</span> : { }</a></li>
                                    <li><a href="#"><span>Huyện: </span> : {inforOrder.district}</a></li>
                                    <li><a href="#"><span>Tỉnh/thành phố </span> : {inforOrder.city}</a></li> */}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="order_details_table">
                        <h2>Chi tiết hóa đơn</h2>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCheckout.checkout.map((item, index) => (
                                        <tr key={`key-${index}`}>
                                            <td>
                                                <p>{item.Products.name}</p>
                                            </td>
                                            <td>
                                                <h5>x {item.Products.Cart_Detail.qty}</h5>
                                            </td>
                                            <td>
                                                <p>${item.Products.Cart_Detail.qty * item.Products.price}</p>
                                            </td>
                                        </tr>
                                    ))}


                                    <tr>
                                        <td>
                                            <h4>Vận chuyển</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>${productCheckout.shipping}.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Tổng tiền</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>${productCheckout.totalMoney}.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End Order Details Area =================--> */}
        </>
    )
}
export default ConfirmPayment