# NPM, NPX, YARN

Nâng cấp React & React DOM lên bản mới nhất @18: npm i react@latest react-dom@latest
Sử dụng ReactDOM.createRoot để render.

```js
// React @18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Có 2 chế độ cài đặt :

- Project scope: Cài vào thư mục dự án

  - npm install react react-dom --save => dependencise
  - npm i react-dom

  - npm install --save-dev react react-dom => devDependencies
  - npm i --D eact react-dom

  - npm uninstall react react-dom

- Global scope: Cài thẳng vào máy
  - npm i --global create-react-app
  - npm i -g create-react-app
  - npm unistall -g create-react-app

## NPX

Dùng để hỗ trợ thực thi các thư viện có file bin như create-react-app  
Kiểm tra node-module/bin/create-react-app để thực thi lệnh.

Với `npm` khi cài nhiều thư viện thì cài tuần tự !== `yarn` có thể cài song song
`yarn` tạo ra một cache khi tải thư viện để những lần sau tải lại hay xóa tải lại sẽ đọc từ cache ra nên tốc độ nhanh hơn.  
Nhược điểm: có thể tốn dung lượng lưu trữ khi tạo cache bên ngoài.
Cần tốc độ thì dùng `yarn`, tiết kiệm dung lượng/ bộ nhớ thì dùng `npm`.
