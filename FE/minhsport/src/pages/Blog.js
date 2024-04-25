import { useEffect, useState } from "react";

import { fetchAllBlog } from "../service/blogService";

const Blog = () => {
  const [listBlog, setListBlog] = useState([]);
  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    const res = await fetchAllBlog();
    console.log("fetch all blog: ", res.data.DT);
    setListBlog(res.data.DT);
  };
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Blog Page</h1>
              <nav class="d-flex align-items-center">
                <a href="index.html">
                  Home<span class="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Blog</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area -->

    <!--================Blog Categorie Area =================--> */}
      <section class="blog_categorie_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="categories_post">
                <img
                  src={require("../assets/img/img_/blog/cat-post/cat-post-3.jpg")}
                  alt="post /"
                />

                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Đời sống xã hội</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Tận hưởng cuộc sống xã hội của bạn cùng nhau</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories_post">
                <img
                  src={require("../assets/img/img_/blog/cat-post/cat-post-2.jpg")}
                  alt="post"
                />
                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Chính trị</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Hãy là một phần của chính trị</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories_post">
                <img
                  src={require("../assets/img/img_/blog/cat-post/cat-post-1.jpg")}
                  alt="post"
                />
                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Thức ăn</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Hãy để thức ăn được hoàn thành</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Blog Categorie Area =================-->

    <!--================Blog Area =================--> */}
      <section class="blog_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog_left_sidebar">
                {listBlog.map((item, index) => (
                  <article key={`key-${index}`} class="row blog_item">
                    <div class="col-md-3">
                      <div class="blog_info text-right">
                        <div class="post_tag">
                          <a href="#">Food,</a>
                          <a class="active" href="#">
                            Technology,
                          </a>
                          <a href="#">Politics,</a>
                          <a href="#">Lifestyle</a>
                        </div>
                        <ul class="blog_meta list">
                          <li>
                            <a href="#">
                              Mark wiens<i class="lnr lnr-user"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              12 Dec, 2018<i class="lnr lnr-calendar-full"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              1.2M Views<i class="lnr lnr-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              06 Comments<i class="lnr lnr-bubble"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="blog_post">
                        <img src={item.image} alt="" />
                        <div class="blog_details">
                          <a href="single-blog.html">
                            <h2>{item.name}</h2>
                          </a>
                          <p>{item.content}.</p>
                          <a href="single-blog.html" class="white_bg_btn">
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <span class="lnr lnr-chevron-left"></span>
                        </span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        01
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        02
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        03
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        04
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        09
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <span class="lnr lnr-chevron-right"></span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget search_widget">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Posts"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Posts'"
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">
                        <i class="lnr lnr-magnifier"></i>
                      </button>
                    </span>
                  </div>
                  <div class="br"></div>
                </aside>
                <aside class="single_sidebar_widget author_widget">
                  <img
                    class="author_img rounded-circle"
                    src={require("../assets/img/img_/blog/author.png")}
                    alt=""
                  />
                  <h4>Minh chan</h4>
                  <p>Senior blog writer</p>
                  <div class="social_icon">
                    <a href="#">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <p>
                    Giày thể thao không chỉ là phụ kiện thời trang đơn thuần, mà
                    còn mang đến những lợi ích sức khỏe đáng kể. Khi chúng ta
                    tập luyện hoặc tham gia các hoạt động thể thao, đôi chân
                    chúng ta phải chịu đựng một lượng lớn áp lực. Những đôi giày
                    thể thao tốt sẽ giúp chúng ta giảm thiểu sự va chạm và độ
                    rung động, giảm nguy cơ chấn thương và tăng độ linh hoạt
                    trong các chuyển động.
                  </p>
                  <div class="br"></div>
                </aside>
                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Bài viết phổ biến</h3>
                  <div class="media post_item">
                    <img
                      src={require("../assets/img/img_/blog/popular-post/post1.jpg")}
                      alt="post"
                    />
                    <div class="media-body">
                      <a href="blog-details.html">
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img
                      src={require("../assets/img/img_/blog/popular-post/post2.jpg")}
                      alt="post"
                    />
                    <div class="media-body">
                      <a href="blog-details.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>4 giờ trước</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img
                      src={require("../assets/img/img_/blog/popular-post/post3.jpg")}
                      alt="post"
                    />
                    <div class="media-body">
                      <a href="blog-details.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>3 giờ trước</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img
                      src={require("../assets/img/img_/blog/popular-post/post4.jpg")}
                      alt="post"
                    />
                    <div class="media-body">
                      <a href="blog-details.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>1 giờ trước</p>
                    </div>
                  </div>
                  <div class="br"></div>
                </aside>
                <aside class="single_sidebar_widget ads_widget">
                  <a href="#">
                    <img
                      class="img-fluid"
                      src={require("../assets/img/img_/blog/add.jpg")}
                      alt=""
                    />
                  </a>
                  <div class="br"></div>
                </aside>
                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Danh mục bài đăng</h4>
                  <ul class="list cat-list">
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                  <div class="br"></div>
                </aside>
                <aside class="single-sidebar-widget newsletter_widget">
                  <h4 class="widget_title">Newsletter</h4>
                  <p>
                    Ở đây, tôi tập trung vào một loạt các mục và tính năng mà
                    chúng ta sử dụng trong cuộc sống mà không cần suy nghĩ lại.
                  </p>
                  <div class="form-group d-flex flex-row">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i
                            class="fa fa-envelope icon-msg"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                      />
                    </div>
                    <a href="#" class="bbtns">
                      Subcribe
                    </a>
                  </div>
                  <p class="text-bottom">Bạn có thể hủy đăng ký bất cứ lúc nào</p>
                  <div class="br"></div>
                </aside>
                <aside class="single-sidebar-widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Architecture</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Blog Area =================--> */}
    </>
  );
};
export default Blog;
