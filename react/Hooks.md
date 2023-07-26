# Hooks

1. Chỉ dùng cho function component
2. Component đơn giản và dễ hiểu hơn
   - Không bị chia logic như method trong lifecycle của Class Component
   - Không cần dùng `this`

## useState

Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu).

---

## useEffect

### Kiến thức liên quan

1. Events: Add, remove Listenner [here.](./Add-Remove-Listener.md)
2. Observer Pattern: Subscribe/ Unsubcribe [here.](./Observer-pattern.md)
3. Closure [here.](./Closure.md)
4. Timers: setInterval, setTimeout, clearInterval, clearTimeout
5. useState
6. Mounted/ Unmouted
7. ===
8. call API

### Ứng dụng

- Update DOM
- Call API
- Listen DOM event
- Cleanup
  - Remove listener/ Unsubcribe
  - Clear timer

### Trường hợp

1. useEffect(callback)
   - Gọi callback mỗi khi component **re-render**
   - Gọi callback sau khi component thêm element vào DOM
   - Thực hiện sau khi ui được render xong => không gây chậm trễ trải nghiệm
2. useEffect(callback, [])
   - Chỉ gọi callback 1 lần sau khi component **mounted**
3. useEffect(callback, [deps])
   - callback được gọi lại mỗi khi **deps** thay đổi

Callback luôn được gọi sau khi component **mounted**  
Cleanup function luôn được gọi trước khi component **unmounted**  
Cleanup function luôn được gọi trước khi callback được gọi (trừ lần **unmount**)

**_Chú ý khi sử dụng với DOM Event_**

Khi khởi tạo một addListenerEvent trong useEffect thì sau khi callback được gọi nếu Component bị `unmount` thì useEffect sẽ được gọi lại mà sẽ call một listener mới, listener trước đó sẽ ở trong bộ nhớ và không được sử dụng => _lãng phí bộ nhớ_ => return removeListenerEvent để xóa trình lắng nghe trước đó.

```js
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setShowGoOnTop(true);
    } else {
      setShowGoOnTop(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  //Clear EventListener
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
```

---

## useLayoutEffect

Sử dụng khi setState và phải kiểm tra state trong useEffect và set lại state.

| useEffect                     | useLayoutEffect               |
| ----------------------------- | ----------------------------- |
| Cập nhật lại state            | Cập nhật lại state            |
| Cập nhật DOM(mutated)         | Cập nhật DOM(mutated)         |
| Render UI                     | Gọi Cleanup nếu deps thay đổi |
| Gọi Cleanup nếu deps thay đổi | Gọi useLayoutEffect callback  |
| Gọi useEffect callback        | Render UI                     |

---

## useRef

Dùng để lưu giá trị qua một tham chiếu bên ngoài fucntion Component.  
useRef nhận 1 initialValue và chỉ sử dụng 1 lần sau khi Component render thì sẽ không dùng initialValue đó nữa.

useRef luôn return lại một object có property là current : useRef => {current: value}

---

## memo (HOC)

Ghi nhớ lại các props của 1 Component để quyết định có render lại Component đó k? => tối ưu hiệu năng.
Xử lí Component để tránh bị render không cần thiết.  
Ex: 1 Comp cha gọi 1 Comp con và Comp con có truyền ít nhất 1 props có thể thay đổi => cho phép Comp con render lại , nếu không thì không cho phép.  
So sánh props thay đổi dùng `===` operator.

Dùng nếu có Comp con không sử dụng state thay đổi của Comp cha.

---

## useCallback

Kiến thức liên quan:

- Reference Types
- React memo

### Trường hợp sử dụng:

Khi Comp con truyền props là một function (Reference types) trong Comp cha, lúc này ta sử dụng useCallback.

ví dụ:
[17-useCallback](https://codesandbox.io/s/17-usecallback-ru92gi?file=/src/App.js)
khi ta thực hiện event click thì useCallback sẽ gọi callback và thực hiện hàm sau đó nhận tham chiếu là địa chỉ vùng nhớ từ hàm => lưu ra ngoài phạm vi của Component, sau đó return lại tham chiếu đó cho biến gọi hàm

1. useCallback((), [])
   - trả về tham chiếu trước đó thay vì tạo ra một hàm mới do (setState, re-render,...).
2. useCallback((), [deps])
   - Tương tự nhứ useEffect mỗi khi deps thay đổi sẽ tạo ra một callback mới trả về một tham chiếu mới.

---

## useMemo

Giúp tránh thực hiện lại một `logic` (**có trả về kết quả còn useEffect thì không**) nào đó không cần thiết.

1. useMemo((), [])
   - chỉ thực hiện tính toán một lần , ở các lần re-render sau đó sẽ trả về kết quả tính toán từ lần trước.
2. useMemo((), [deps])
   - Tương tự nhứ useEffect mỗi khi deps thay đổi sẽ tính toán lại logic và trả về kết quả tiính toán mới.

---

## useReducer

Sử dụng vs ý nghĩa gần giống vs useState đều là xử lý state, nhưng thay vì useState dùng để xử lí các dữ liệu như kiểu primitive types thì useReducer được ứng dụng cho các kiểu tham chiếu phức tạp hơn, hoặc được dùng để xử lí nhiều state cùng 1 lúc.  
So sánh logic thực hiện:

| useState            | useReducer              |
| ------------------- | ----------------------- |
| khởi tạo Init State | khởi tạo Init State     |
| Actions => setState | Actions                 |
|                     | Reducer (state, action) |
|                     | Dispatch actions        |

```js
const [state, dispatch] = useReducer(reducer, initState);
```

Khi Component được mount useReducer được gọi => truy cập hàm reducer nhưng chưa gọi, nhận giá trị khởi tạo => return về array với state = initState, và hàm dispatch để dispatch actions.

Khi dispath action => hàm reducer được gọi => xử lí logic theo action_name được dispatch với current state.

---

## useContext

Giúp đơn giản việc truyền dữ liệu từ Component cha xuống Comp con lồng nhau mà không cần dùng props.  
Nếu có bất kì một Comp trung gian nào bị gỡ bỏ hay lỗi không truyền prop được thì phải sửa lại toàn bộ props được truyền => useContext

Comp A (props) => Comp B (props) => Comp C (props)

1. Create Context
   - Tạo ra một phạm vi để truyền dữ liệu từ Component được tạo ngữ cảnh tới các Comp con.
2. Provider
   - Truyền dữ liệu , Provider cung cấp một props là value={...},
3. Consumer
   - Sử dụng useContext để lấy dữ liệu của biến được tạo từ createContext => trả về giá trị của value trong Provider

## useImperativeHandle

### ForwardRef

- Giúp tùy chỉnh được ref của một function Component
  Là một HOC dùng để chuyển tiếp ref, forwardRef sẽ nhận ref truyền qua props từ Component cha, forwardRef sẽ truyền cho Comp con đối số thứ 2 là ref
