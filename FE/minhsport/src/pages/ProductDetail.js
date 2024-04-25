import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../service/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const fetDetailProduct = async () => {
    const res = await fetchProductDetail(id);
    if (res && res.data.DT) {
      console.log(res);
      setProductDetail([res.data.DT]);
    }
  };

  useEffect(() => {
    fetDetailProduct();
  }, []);
  console.log(productDetail);
  return (
    <>
      {/* <!--================Single Product Area =================--> */}
      {productDetail.map((item, index) => {
        return (
          <div class="product_image_area">
            <div class="container">
              <div class="row s_product_inner">
                <div class="col-lg-6">
                  <div class="s_Product_carousel">
                    <div class="single-prd-item">
                      <img class="img-fluid" src={item.image} alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                  <div class="s_product_text">
                    <h3>{item.name}</h3>
                    <h2>${item.price}</h2>
                    <ul class="list">
                      <li>
                        <a class="active" href="#">
                          <span>Thương Hiệu</span> : Nike Air Force
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>Tình trạng</span> : Còn hàng
                        </a>
                      </li>
                    </ul>
                    <p>
                      Công nghệ Air là một trong những công nghệ nổi tiếng của
                      Nike, giúp tăng độ đàn hồi, đệm và giảm thiểu sức ép trên
                      đôi chân. Đây là một công nghệ đã được áp dụng trên nhiều
                      sản phẩm giày thể thao của Nike..
                    </p>
                    <div class="product_count">
                      <label for="qty">Số lượng:</label>
                      <input
                        type="text"
                        name="qty"
                        id="sst"
                        maxlength="12"
                        value="1"
                        title="Quantity:"
                        class="input-text qty"
                      />
                      <button
                        onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                        class="increase items-count"
                        type="button"
                      >
                        <i class="lnr lnr-chevron-up"></i>
                      </button>
                      <button
                        onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                        class="reduced items-count"
                        type="button"
                      >
                        <i class="lnr lnr-chevron-down"></i>
                      </button>
                    </div>
                    <div class="card_area d-flex align-items-center">
                      <a class="primary-btn" href="#">
                        Thêm vào giỏ hàng
                      </a>
                      <a class="icon_btn" href="#">
                        <i class="fa-solid fa-diamond-turn-right"></i>
                      </a>
                      <a class="icon_btn" href="#">
                        <i class="fa-solid fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div class="col-lg-6">
                            <div class="s_Product_carousel">
                                <div class="single-prd-item">
                                    <img class="img-fluid" src={require("../assets/img/img_/category/s-p1.jpg")} alt="" />
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="s_product_text">
                                <h3>Faded SkyBlu Denim Jeans</h3>
                                <h2>$149.99</h2>
                                <ul class="list">
                                    <li><a class="active" href="#"><span>Category</span> : Household</a></li>
                                    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                                </ul>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                    something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                    during the winter.</p>
                                <div class="product_count">
                                    <label for="qty">Quantity:</label>
                                    <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" />
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                        class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                        class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                </div>
                                <div class="card_area d-flex align-items-center">
                                    <a class="primary-btn" href="#">Add to Cart</a>
                                    <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
                                    <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                                </div>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
        );
      })}

      {/* <!--================End Single Product Area =================-->

	<!--================Product Description Area =================--> */}
      <section class="product_description_area">
        <div class="container">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Mô tả
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Đặc điểm
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Bình luận
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Đánh giá
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists
                .Beryl’s pictures feature women of all shapes and sizes enjoying
                themselves .Born between the two world wars, Beryl Cook
                eventually left Kendrick School in Reading at the age of 15,
                where she went to secretarial school and then into an insurance
                office. After moving to London and then Hampton, she eventually
                married her next door neighbour from Reading, John Cook. He was
                an officer in the Merchant Navy and after he left the sea in
                1956, they bought a pub for a year before John took a job in
                Southern Rhodesia with a motor company. Beryl bought their young
                son a box of watercolours, and when showing him how to use it,
                she decided that she herself quite enjoyed painting. John
                subsequently bought her a child’s painting set for her birthday
                and it was with this that she produced her first significant
                work, a half-length portrait of a dark-skinned lady with a
                vacant expression and large drooping breasts. It was aptly named
                ‘Hangover’ by Beryl’s husband and
              </p>
              <p>
                It is often frustrating to attempt to plan meals that are
                designed for one. Despite this fact, we are seeing more and more
                recipe books and Internet websites that are dedicated to the act
                of cooking for one. Divorce and the death of spouses or grown
                children leaving for college are all reasons that someone
                accustomed to cooking for more than one would suddenly need to
                learn how to adjust all the cooking practices utilized before
                into a streamlined plan of cooking that is more efficient for
                one person creating less
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <h5>Width</h5>
                      </td>
                      <td>
                        <h5>128mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Height</h5>
                      </td>
                      <td>
                        <h5>508mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Depth</h5>
                      </td>
                      <td>
                        <h5>85mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Weight</h5>
                      </td>
                      <td>
                        <h5>52gm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Quality checking</h5>
                      </td>
                      <td>
                        <h5>yes</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Freshness Duration</h5>
                      </td>
                      <td>
                        <h5>03days</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>When packeting</h5>
                      </td>
                      <td>
                        <h5>Without touch of hand</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Each Box contains</h5>
                      </td>
                      <td>
                        <h5>60pcs</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="comment_list">
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-1.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2018 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Nike Air Force được thiết kế với kiểu dáng cổ điển, với
                        đế giày dày và phần trên được làm bằng chất liệu da hoặc
                        vải. Thiết kế này không chỉ tạo nên phong cách thể thao
                        mạnh mẽ, mà còn rất thoải mái khi sử dụng.
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-2.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2018 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Nike Air Force được sản xuất với chất lượng cao và được
                        kiểm tra kỹ lưỡng trước khi đưa ra thị trường. Điều này
                        đảm bảo rằng các đôi giày này có thể sử dụng trong thời
                        gian dài mà không bị hỏng hóc.
                      </p>
                    </div>
                    <div class="review_item reply">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-3.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2018 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Độ bền: Đôi giày Nike Air Force có độ bền rất cao và có
                        thể sử dụng trong nhiều hoàn cảnh khác nhau, từ đi bộ
                        đến tham gia các hoạt động thể thao. Phù hợp với nhiều
                        phong cách: Nhờ vào thiết kế cổ điển và đa dạng về màu
                        sắc, Nike Air Force có thể phù hợp với nhiều phong cách
                        thời trang khác nhau.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Post a comment</h4>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="number"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button
                          type="submit"
                          value="submit"
                          class="btn primary-btn"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show active"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="row total_rate">
                    <div class="col-6">
                      <div class="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="rating_list">
                        <h3>Based on 3 Reviews</h3>
                        <ul class="list">
                          <li>
                            <a href="#">
                              5 Star <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              4 Star <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              3 Star <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              2 Star <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              1 Star <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="review_list">
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-1.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Nike Air Force là một dòng sản phẩm giày của Nike ra đời
                        từ những năm 1980, được thiết kế để đáp ứng nhu cầu chơi
                        bóng rổ của các vận động viên chuyên nghiệp. Tuy nhiên,
                        sau đó, nó đã trở thành một biểu tượng về phong cách và
                        thời trang thể thao.
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-2.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Tóm lại, Nike Air Force là một sản phẩm giày thể thao đa
                        dụng và phù hợp với nhiều đối tượng khách hàng, từ các
                        vận động viên chuyên nghiệp đến các tín đồ thời trang.
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img
                            src={require("../assets/img/img_/product/review-3.png")}
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Sản phẩm có nhu cầu: NIKE AIR FORCE là một sản phẩm phổ
                        biến và có nhu cầu cao trong thị trường hiện nay. Việc
                        xây dựng một website bán giày thể thao có thể giúp đáp
                        ứng nhu cầu của khách hàng và tăng doanh số bán hàng cho
                        doanh nghiệp.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Thêm đánh giá</h4>
                    <p>Đánh giá của bạn:</p>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p>Nổi bật</p>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Full name"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Your Full name'"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Email Address'"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="number"
                            name="number"
                            placeholder="Phone Number"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Phone Number'"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Review"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Review'"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button
                          type="submit"
                          value="submit"
                          class="primary-btn"
                        >
                          Đang ký ngay
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Product Description Area =================--> */}
    </>
  );
};
export default ProductDetail;
