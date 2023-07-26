# JSX (Javascript XML)

HTML là cú pháp mở rộng của XML

JSX không thể được truyền thẳng cho ReactDOM  
Đối số ReactDOM nhận vào render ra giao diện luôn là ReactElement

## Babel

Thư viện JS dùng để phân tích và chuyển đổi cú pháp

```html
<ul>
  <li>JS</li>
  <li>React</li>
</ul>
```

```javascript
const ul = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "JS"),
  React.createElement("li", null, "React")
);
```

Các React Element không thể đứng 1 mình mà phải được wrap lại bởi 1 thẻ cha, rồi các thẻ con sẽ được đưa vào children.  
Cú pháp lỗi:

```js
const jsx = (
        <h1>heading 1</h1>
        <h2>heading 2</h2>
      )
```

Có thể sử dụng thẻ div để bọc 2 element trên hoặc dùng React.Fragment, được sinh ra để wrap được nhiều element con và không sinh ra div.

```js
 const jsx = (
        <React.Fragment>
          <h1>heading 1</h1>
          <h2>heading 2</h2>
        <React.Fragment/>
      )
Convert jsx to js:
const jsx = React.createElement(React.Fragment, null, children)
```

## Làm việc với JSX

- Component tự định nghĩa phải viết hoa chữ cái đầu
  - Có thể dùng như cách làm Button [12-form-Component](./12-form-component.html)
- Boolean, Null, Undifined không được render.
- Sử dụng toán tử && để kiểm tra và render theo điều kiện.

**_Chú ý _**  
Props default luôn là true (nên chỉ gán false khi cần).

```js
function Button({ title, primary }) {
  console.log(primary); // true
  return <button>{title}</button>;
}

function App() {
  const title = "Hello React";
  return (
    <div className="wrapper">
      <Button primary title={title} />
    </div>
  );
}
```

Sử dụng Spread/ Rest ES6 linh hoạt

```js
function Input({ label, ...inputProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
}
function App() {
  return (
    <div className="wrapper">
      <Input
        label="Full Name: "
        type="text"
        placeholder="Enter your name"
        onFocus={() => console.log(Math.random())}
      />
    </div>
  );
}
```
