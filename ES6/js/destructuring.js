let [number, address] = [30, 'seoul'];
({address: a, number = 20} = {address, number});

let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

// let {height, weight} = 신체정보.body;
// let [topSize, pantsSize] = ["상의 Large", "바지 30인치"];

let { body:{height, weight}, size: [topSize, pants]} = 신체정보;