const Footer = () => {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="h-10 bg-gray-100 pb-4"></div>
      <section className="grid grid-cols-5 pb-4 border-b border-t pt-4">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Trang chủ</p>
          <p className="font-bold">Video</p>
          <p className="font-bold">Podcasts</p>
          <p className="font-bold">Ảnh</p>
          <p className="font-bold">Infographics</p>
          <p className="font-bold">Mới nhất</p>
          <p className="font-bold">Xem nhiều</p>
          <p className="font-bold">Tin nóng</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Thời sự</p>
          <p>Góc nhìn</p>
          <p>Thế giới</p>
          <p>Kinh doanh</p>
          <p>Bất động sản</p>
          <p>Giải trí</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Thể thao</p>
          <p>Pháp luật</p>
          <p>Giáo dục</p>
          <p>Sức khỏe</p>
          <p>Đời sống</p>
          <p>Du lịch</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Khoa học</p>
          <p>Số hóa</p>
          <p>Xe</p>
          <p>Ý kiến</p>
          <p>Tâm sự</p>
          <p>Thư giãn</p>
        </div>

        <div>
          Tải ứng dụng <br />
          VnExpressInternational <br />
          Liên hệ <br />
          Tòa soạn
          <br />
          Quảng cáo
          <br />
          Hợp tác bản quyền <br />
          Đường dây nóng
        </div>
      </section>
      <section className="border-b pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>Báo điện tử</div>
            <img src="https://s1cdn.vnecdn.net/vnexpress/restruct/i/v862/v2_2019/pc/graphics/logo.svg" />
          </div>

          <div className="flex gap-2 items-center">
            <div>Điều khoản sử dụng</div>
            <div className="border-l pl-2">Chính sách bảo mật</div>
            <div className="border-l pl-2">Cookies</div>
            <div className="border-l pl-2">RSS</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3">
        <div>
          <div>Báo tiếng Việt nhiều người xem nhất</div>
          <p>Thuộc Bộ Khoa học và Công nghệ</p>
          <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
        </div>

        <div>
          <p>Thuộc Bộ Khoa học và Công nghệ</p>
          <p>Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch</p>
          <p> Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
          <p>Tổng biên tập: Phạm Hiếu</p>
        </div>

        <div>
          <p>© 1997-2024. Toàn bộ bản quyền thuộc VnExpress</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
