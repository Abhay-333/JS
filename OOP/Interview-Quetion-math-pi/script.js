const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const user = {
  userName: "Abhay",
  id: 2523,
  isAvailable: true,

  getUserDetails: function () {
    console.log(
      `UserName: ${this.userName}, id: ${this.id} isAvailable: ${this.isAvailable}`
    );
  },
};

// console.log(Object.getOwnPropertyDescriptor(user, "userName"));

Object.defineProperty(user, "userName", {
  writable: false,
  enumerable: true,
});

// console.log(Object.getOwnPropertyDescriptor(user, "userName"));

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
