import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../service/userService'
import { inserUserToCart } from '../service/cartService'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    FETCH_DATA_LOGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
} from "../redux/actions/action";

const Login = () => {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
    console.log(search)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(FETCH_DATA_LOGIN());
        let res = await userLogin({ username, password })

        if (res && res.data && +res.data.EC === 1) {

            let data = {
                isAuthenticated: true,
                token: "fake token",
            };
            let idAccount = res.data.DT
            let resadd = await inserUserToCart({ idAccount })
            console.log('res add: ', resadd)

            localStorage.setItem("token", data.token);
            // id user se xem cart của người đó
            sessionStorage.setItem("idAccount", idAccount);
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("account", JSON.stringify(data));
            dispatch(FETCH_DATA_SUCCESS(idAccount, username, data.token));
            toast.success(res.data.EM)
            navigate(redirect || "/");
            //navigate("/")
        }
        else {
            toast.error(res.data.EM)
            dispatch(FETCH_DATA_ERROR());
        }
    }
    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Đăng nhập/Đăng ký</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Trang chủ<span className="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Đăng nhập/Đăng ký</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area --> */}

            {/* <!--================Login Box Area =================--> */}
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src={require('../assets/img/img_/login.jpg')} alt="" />
                                <div className="hover">
                                    <h4>Bạn mới sử dụng trang web của chúng tôi?</h4>
                                    <p>Có những tiến bộ đang được thực hiện trong khoa học và công nghệ hàng ngày, và một ví dụ điển hình về điều này</p>
                                    <Link className="primary-btn" to="/register">Tạo tài khoản mới</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Đăng nhập để tham gia</h3>
                                <form className="row login_form" action="" method="post" id="contactForm" novalidate="novalidate">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username or Email'" onChange={(e) => setUsername(e.target.value)} value={username} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        {/* <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label for="f-option2">Keep me logged in</label>
                                        </div> */}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn" onClick={(e) => handleLogin(e)}>Log In</button>
                                        <a href="#">Quên mật khẩu?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}
export default Login