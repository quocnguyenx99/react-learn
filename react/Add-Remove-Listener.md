# Add and Remove Event Listener

element.addEventListener(event, function, useCapture)  
Gắn trình xử lý sự kiện cho một phần tử trong DOM.

The difference between bubbling and capturing:
element1.addEventListener("click", myFunction, false);

- Tác động thì thẻ con -> thẻ cha
  element2.addEventListener("click", myFunction, true);
- Tác động ở thẻ đại diện là thẻ cha -> thẻ con
