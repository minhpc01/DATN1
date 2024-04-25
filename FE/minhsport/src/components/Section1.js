const Section1 = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="row content">
            <div class="col-lg-6">
              <h2>Tìm hiểu thêm về MINHSPORT SHOP</h2>
              <h3>
                MINHSPORT SHOP chuyên bán sỉ, lẻ giày thể thao của các thương
                hiệu lớn trên thế giới
              </h3>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Shop là 1 địa chỉ bán giày thể thao uy tín, chất lượng, phù hợp
                với mọi lứa tuổi. Bạn có thể tìm kiếm thêm để tìm ra loại giày
                phù hợp nhất với nhu cầu của mình, bạn cũng có thể tham khảo
                hoặc hỗ trợ tư vấn khách hàng qua chatbox của website.
              </p>
              <ul>
                <li>
                  <i class="fa-solid fa-check-double"></i>
                  Cung cấp giày thể thao cho các bộ môn thể thao: bóng rổ, bóng
                  chuyền, đá bóng, ....
                </li>
                <li>
                  <i class="fa-solid fa-check-double"></i>
                  Hộ trợ sửa chữa, bảo hành giày theo yêu cầu của khách hàng
                </li>
                <li>
                  <i class="fa-solid fa-check-double"></i>
                  Tư vấn nhiệt tình, hỗ trợ chu đáo, phục vụ chuyên nghiệp nhằm
                  tạo niềm tin với khách hàng
                </li>
              </ul>
              <p class="fst-italic">
                Chúc bạn tìm được đôi giày ưng ý và phù hợp nhất cho mình!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" class="clients section-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-1.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-2.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-3.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-4.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-5.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/img/clients/client-6.png")}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="icon-box">
                <i class="fa-solid fa-briefcase bi bi-briefcase"></i>
                {/* <i class="bi bi-briefcase"></i> */}
                <h4>
                  <a href="#">Nike Air Jordan</a>
                </h4>
                <p>
                  Mẫu giày này có thiết kế thời trang, độc đáo và cũng được chú
                  ý vì tính chất đàn hồi của đế giày, giúp cho việc nhảy, chạy
                  và di chuyển trên sân bóng rổ trở nên dễ dàng và linh hoạt
                  hơn.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-list-check bi bi-card-checklist"></i>
                {/* <i class="bi bi-card-checklist"></i> */}
                <h4>
                  <a href="#">Adidas Ultra Boost</a>
                </h4>
                <p>
                  Thiết kế bóng bẩy, độc đáo và có khả năng đàn hồi tuyệt vời,
                  giày Adidas Ultra Boost giúp cho người sử dụng có cảm giác nhẹ
                  nhàng và thoải mái khi chạy và di chuyển.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-chart-simple bi bi-card-checklist"></i>
                {/* <i class="bi bi-bar-chart"></i> */}
                <h4>
                  <a href="#">New Balance</a>
                </h4>
                <p>
                  Điều đặc biệt về mẫu giày này là sự kết hợp giữa kiểu dáng
                  thời trang và chất lượng tuyệt vời, giúp cho người sử dụng có
                  thể sử dụng giày trong nhiều môi trường và hoạt động khác
                  nhau.
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-binoculars bi bi-binoculars"></i>
                {/* <i class="bi bi-binoculars"></i> */}
                <h4>
                  <a href="#">Converse Chuck Taylor All Star</a>
                </h4>
                <p>
                  Với thiết kế đơn giản, tinh tế và vô cùng linh hoạt, mẫu giày
                  này đã trở thành một trong những mẫu giày được yêu thích nhất
                  trong giới trẻ hiện nay, trở thành một biểu tượng về kiểu dáng
                  và phong cách
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-regular fa-sun bi bi-brightness-high"></i>
                {/* <i class="bi bi-brightness-high"></i> */}
                <h4>
                  <a href="#">Adidas</a>
                </h4>
                <p>
                  Thiết kế đẹp mắt, luôn tạo ra các sản phẩm có thiết kế đẹp mắt
                  và hiện đại, phù hợp với thị hiếu của nhiều đối tượng khách
                  hàng khác nhau. Độ bền cao và rất phù hợp cho nhiều môn thể
                  thao
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="fa-solid fa-suitcase bi bi-calendar4-week"></i>
                {/* <i class="bi bi-calendar4-week"></i> */}
                <h4>
                  <a href="#">Nike Air Force</a>
                </h4>
                <p>
                  Công nghệ Air là một trong những công nghệ nổi tiếng của Nike,
                  giúp tăng độ đàn hồi, đệm và giảm thiểu sức ép trên đôi chân.
                  Đây là một công nghệ đã được áp dụng trên nhiều sản phẩm giày
                  thể thao của Nike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section1;
