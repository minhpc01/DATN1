"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Blog",
      [
        {
          name: 'Nike Air Jordan',
          content:
            'Được ra mắt vào năm 1985, Nike Air Jordan được thiết kế đặc biệt cho Michael Jordan, một trong những vận động viên bóng rổ vĩ đại nhất mọi thời đại. Mẫu giày này có thiết kế thời trang, độc đáo và cũng được chú ý vì tính chất đàn hồi của đế giày, giúp cho việc nhảy, chạy và di chuyển trên sân bóng rổ trở nên dễ dàng và linh hoạt hơn.',
          image: 'http://127.0.0.1:5501/img/blog/main-blog/m-blog-1.jpg',
        },
        {
          name: 'Adidas Ultra Boost',
          content:
            ' Được phát hành vào năm 2015, Adidas Ultra Boost là một trong những mẫu giày thể thao tốt nhất trên thế giới. Thiết kế bóng bẩy, độc đáo và có khả năng đàn hồi tuyệt vời, giày Adidas Ultra Boost giúp cho người sử dụng có cảm giác nhẹ nhàng và thoải mái khi chạy và di chuyển.',
          image: 'http://127.0.0.1:5501/img/blog/main-blog/m-blog-1.jpg',
        },
        {
          name: 'New Balance 990',
          content:
            'Mẫu giày thể thao New Balance 990 là một trong những mẫu giày được sản xuất tại Mỹ và nổi tiếng với độ bền và tính chất chống trượt tuyệt vời. Điều đặc biệt về mẫu giày này là sự kết hợp giữa kiểu dáng thời trang và chất lượng tuyệt vời, giúp cho người sử dụng có thể sử dụng giày trong nhiều môi trường và hoạt động khác nhau.',
          image: 'http://127.0.0.1:5501/img/blog/main-blog/m-blog-3.jpg',
        },
        {
          name: 'Converse Chuck Taylor All Star',
          content:
            'Mẫu giày Converse Chuck Taylor All Star đã trở thành một biểu tượng về kiểu dáng và phong cách. Với thiết kế đơn giản, tinh tế và vô cùng linh hoạt, mẫu giày này đã trở thành một trong những mẫu giày được yêu thích nhất trong giới trẻ hiện nay.',
          image: 'http://127.0.0.1:5501/img/blog/main-blog/m-blog-4.jpg',
        },
        {
          name: 'Nike Air Force',
          content:
            'Công nghệ Air là một trong những công nghệ nổi tiếng của Nike, giúp tăng độ đàn hồi, đệm và giảm thiểu sức ép trên đôi chân. Đây là một công nghệ đã được áp dụng trên nhiều sản phẩm giày thể thao của Nike.',
          image: 'http://127.0.0.1:5501/img/blog/main-blog/m-blog-5.jpg',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
