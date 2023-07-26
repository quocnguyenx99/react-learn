// Create counter
// function createCounter() {
//   let counter = 0;
//   function increase() {
//     return ++counter;
//   }
//   return increase;
// }

// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// Create LoggerMess
// function createLog(namespace) {
//   function logger(message) {
//     console.log(`[${namespace}] ${message}`);
//   }

//   return logger;
// }

// const infoLogger = createLog("Info");

// infoLogger("Bat dau gui mail");
// infoLogger("Gui mail loi lan 1 thu lai");
// infoLogger("Gui mail thanh cong cho user");

// const errorLogger = createLog("Error");

// errorLogger("Email khong duoc gui");
// errorLogger("Gui mail loi lan 1 thu lai");
// errorLogger("Gui mail thanh cong cho user");

// get/ set/ remove for localStorage

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  console.log(store);

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(keyname) {
      return store[keyname];
    },
    set(keyname, value) {
      store[keyname] = value;
      save();
    },
    remove(keyname) {
      delete store[keyname];
      save();
    },
  };
  return storage;
}

const ProfileSetting = createStorage("profile_setting");
console.log(typeof localStorage);
console.log(localStorage["profile_setting"]);
console.log(ProfileSetting.get("konichiwa"));
ProfileSetting.set("konichiwa", "sensei");

// Create CarList
// function createApp() {
//   const cars = [];
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars);
//     },
//   };
// }

// const app = createApp();
// app.add("BMW");
// app.show();
