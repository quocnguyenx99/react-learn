# Observer Pattern

Observer pattern là một mẫu thiết kế phần mềm mà một đối tượng, gọi là subject, duy trì một danh sách các thành phần phụ thuộc nó, gọi là observer, và thông báo tới chúng một cách tự động về bất cứ thay đổi nào, thường thì bằng cách gọi 1 hàm của chúng.

Giả sử chúng ta có một bảng tính excel với nhiều trang tính chứa các dữ liệu cần để thống kê. Ta có thể tạo ra vô số biểu đồ sử dụng dữ liệu ở các trang tính đó để hiển thị ra kết quả thống kê. Khi ta thay đổi dữ liệu ở một trang tính, các biểu đồ có sử dụng dữ liệu đó cũng phải được cập nhật để có số liệu thống kê chính xác. Ta có thể thấy là số lượng biểu đồ có thể dùng dữ liệu ở một trang tính là không giới hạn.  
![Example] (https://images.viblo.asia/7ff51829-c106-4a39-9220-48b1ab4e32ff.jpg)

Và hướng giải quyết khi sử dụng Observer pattern: trang tính ở đây đóng vai trò là subject, còn các biểu đồ chính là các observer. Mỗi khi trang tính được cập nhật dữ liệu, ta sẽ gọi cập nhật đến các biểu đồ phụ thuộc dữ liệu với trang tính đó.  
Tham khảo thêm (https://viblo.asia/p/gioi-thieu-ve-observer-design-pattern-Ljy5V4j9Zra)
