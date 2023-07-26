# Props

Đối với React elements

- Sử dụng props giống attributes của thẻ HTML.
- 2 props class , for => `className`, `htmlFor`
- Phải tuân theo quy ước có sẵn.

Đối với React components

- Sử dụng props giống như đối số cho Component.
- props bản chất là một obj chứa các key & value
- Tự do đặt tên props
  - Đặt tên theo CamelCase.
  - Có thể bao gồm dấu gạch ngang (hạn chế dùng).

**_Chú ý_**

- children cũng thuộc props obj
- props key là props đặc biệt.
- Props cơ bản là đối số của Component => Có thể là bất kì kiểu dữ liệu nào.
- Sử dụng destructuring giúp gọi props tiện và nhanh hơn.
