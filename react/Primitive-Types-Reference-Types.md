# Primitive Types and Reference Types

## Value Types (kiểu tham trị)

- string
- Number
- Boolean
- BigInt
- Symbol
- undefined
- null

## Reference types (Non-primitive data types) (kiểu tham chiếu)

- Object
- Array
- Function

## Data types with functions

- Value Types
- Reference types

Ví dụ:
**Value Types**

```js
let a = 1;
let b = a;
a = 2;
console.log(b); // 1
```

Với let a = 1, tạo ra biến a, cấp ô nhớ, lưu 1 vào ô nhớ.

| Biến | Giá trị | Ô nhớ |
| ---- | ------- | ----- |
| a    | 1       | 1     |

Với let b = a, tạo ra biến b, cấp ô nhớ, sao chép giá trị của a(1) vào ô nhớ mới.

| Biến | Giá trị | Ô nhớ |
| ---- | ------- | ----- |
| a    | 1       | 1     |
| b    | 1       | 1     |

Với a =2: Sửa giá trị trong ô nhớ của a thành 2

| Biến | Giá trị | Ô nhớ |
| ---- | ------- | ----- |
| a    | 2       | 2     |
| b    | 1       | 1     |

a và b được cấp 2 ô nhớ khác nhau nên việc sửa a = 2 không ảnh hưởng đến ô nhớ b.

Ví dụ **Reference Types**

```js
const a = {
  name: "Honda",
};
const b = a;
a.name = "BMW";
console.log(b.name); // BMW
```

Với const a = {name: "Honda"}, tạo biến a, cấp một ô nhớ, lưu {name: 'Honda'} vào ô nhớ, **_trả về địa chỉ đã lưu và gán cho biến a_**.

| Biến | Giá trị | Địa chỉ | Ô nhớ           |
| ---- | ------- | ------- | --------------- |
| a    | <#001>  | #001    | {name: "Honda"} |

Với const b = a, tạo biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a.

| Biến | Giá trị | Địa chỉ | Ô nhớ           |
| ---- | ------- | ------- | --------------- |
| a    | <#001>  | #001    | {name: "Honda"} |
| b    | <#001>  |         |                 |

Với a.name = 'BMW' Sửa giá trị của keyname trong ô nhớ thành 'BMW'

| Biến | Giá trị | Địa chỉ | Ô nhớ         |
| ---- | ------- | ------- | ------------- |
| a    | <#001>  | #001    | {name: "BMW"} |
| b    | <#001>  |         |               |

Vì a, b cùng trỏ tới một ô nhớ nên việc sửa giá trị của object thông qua a và b là như nhau.

Ví dụ sau:

```js
let a = {
  name: "Honda",
};
a = {
  name: "BMW",
  model: "i8",
};
```

| Biến | Giá trị | Địa chỉ | Ô nhớ                      |
| ---- | ------- | ------- | -------------------------- |
| a    | <#002>  | #001    | {name: "BMW"}              |
| a    |         | #002    | {name: "BMW",model: "i8",} |

Mỗi khi tạo ra một object mới với cú pháp {} thì sẽ có một ô nhớ mới được sử dụng.

> 👍 Ghi nhớ
>
> Cứ một biến hay hằng được tạo ra và gán cho nó một biến khác là obj thì các biến , hằng đó sẽ trỏ về một địa chỉ ô nhớ.

Ví dụ Obj lồng nhau

```js
const student {
    name: 'Henry',
    profile: {
        firstName: 'Henry',
        lastName: 'Queen',
        introduction: 'Boy'
    }
}
```

Trong ví dụ trên có 2 vùng nhớ được tạo ra

| Biến | Giá trị | Địa chỉ | Ô nhớ                                                      |
| ---- | ------- | ------- | ---------------------------------------------------------- |
|      |         | #001    | {firstName: 'Henry',lastName: 'Queen',introduction: 'Boy'} |
| a    | <#002>  | #002    | {name: 'Henry, profile:<#001>}                             |
