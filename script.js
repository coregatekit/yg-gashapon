var randomBtn = document.getElementById('randomBtn');
var resetBtn = document.getElementById('resetBtn');
var reward = document.getElementById('reward');

const asc1_rewards = [
  {
    name: 'ยารักษาบาดเจ็บ(Event) 1 ชิ้น',
    img: './assets/items/1008000174.jpg',
    weighted: 25,
  },
  {
    name: 'ยาโสมเซียน(Event) 1 ชิ้น',
    img: './assets/items/1008000175.jpg',
    weighted: 25,
  },
  {
    name: 'ยันต์โชคลาภระดับต่ำสุด(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/800000056.png',
    weighted: 15,
  },
  {
    name: 'ยันต์โชคลาภระดับต่ำ(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/800000057.png',
    weighted: 15,
  },
  {
    name: 'แผ่นป้ายยุทธภพ 1 วัน(กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008001581.jpg',
    weighted: 5,
  },
  {
    name: 'ลายมังกรทอง(1วัน)(event) 1 ชิ้น',
    img: './assets/items/1008001031.jpg',
    weighted: 2,
  },
  {
    name: 'ยาเทพไร้มลทิน(1 วัน) (ไม่สามารถซื้อขายได้) 1 ชิ้น',
    img: './assets/items/1008001576.jpg',
    weighted: 2,
  },
  {
    name: 'ผู้เชี่ยวชาญแห่งการเสริมพลังอาวุธ เซียนขั้น 1 (กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008002275.png',
    weighted: 1,
  },
];

const asc2_rewards = [
  {
    name: 'ยารักษาบาดเจ็บ(อัตรา)(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/1008001849.png',
    weighted: 25,
  },
  {
    name: 'ยาโสมเซียน(อัตรา)(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/1008001850.png',
    weighted: 25,
  },
  {
    name: 'ยันต์โชคลาภระดับต่ำสุด(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/800000056.png',
    weighted: 15,
  },
  {
    name: 'ยันต์โชคลาภระดับต่ำ(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/800000057.png',
    weighted: 15,
  },
  {
    name: 'แผ่นป้ายยุทธภพ 1 วัน(กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008001581.jpg',
    weighted: 5,
  },
  {
    name: 'ลายมังกรทอง(1วัน)(event) 1 ชิ้น',
    img: './assets/items/1008001031.jpg',
    weighted: 2,
  },
  {
    name: 'ยาเทพไร้มลทิน(1 วัน) (ไม่สามารถซื้อขายได้) 1 ชิ้น',
    img: './assets/items/1008001576.jpg',
    weighted: 2,
  },
  {
    name: 'ผู้เชี่ยวชาญแห่งการเสริมพลังอาวุธ เซียนขั้น 2 (กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008002276.png',
    weighted: 1,
  },
];

const asc3_rewards = [
  {
    name: 'ยันต์รู้แจ้งแห่งสงครามพิชิตมังกร 1 ชิ้น',
    img: './assets/items/1008001552-ยันต์รู้แจ้งแห่งสงครามพิชิตมังกร.png',
    weighted: 25,
  },
  {
    name: 'ยันต์พันทองแห่งสงครามพิชิตมังกร 1 ชิ้น',
    img: './assets/items/1008001553-ยันต์พันทองแห่งสงครามพิชิตมังกร.png',
    weighted: 25,
  },
  {
    name: 'ยันต์โชคลาภระดับต่ำ(ซื้อขายไม่ได้) 1 ชิ้น',
    img: './assets/items/800000057.png',
    weighted: 15,
  },
  {
    name: 'ยันต์โชคลาภระดับกลาง(กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008002513.jpg',
    weighted: 15,
  },
  {
    name: 'แผ่นป้ายยุทธภพ 1 วัน(กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008001581.jpg',
    weighted: 5,
  },
  {
    name: 'ลายมังกรทอง(1วัน)(event) 1 ชิ้น',
    img: './assets/items/1008001031.jpg',
    weighted: 2,
  },
  {
    name: 'ยาเทพไร้มลทิน(1 วัน) (ไม่สามารถซื้อขายได้) 1 ชิ้น',
    img: './assets/items/1008001576.jpg',
    weighted: 2,
  },
  {
    name: 'ผู้เชี่ยวชาญแห่งการเสริมพลังอาวุธ เซียนขั้น 3 (กิจกรรม) 1 ชิ้น',
    img: './assets/items/1008002277.png',
    weighted: 1,
  },
];

randomBtn.addEventListener('click', onGetReward);
resetBtn.addEventListener('click', onReset);

function onGetReward() {
  let randomCount = document.getElementById('number_random').value;
  if (randomCount === undefined || randomCount === '') {
    randomCount = 1;
  } else {
    randomCount = parseInt(randomCount);
  }

  if (randomCount > 100 || randomCount < 0) {
    alert('เกินจำนวนที่กำหนด กรุณากรอก 1-100');
    return;
  }

  let itemSet;
  const character_class = document.getElementById('character_class').value;

  if (character_class === 'asc1') {
    itemSet = asc1_rewards;
  } else if (character_class === 'asc2') {
    itemSet = asc2_rewards;
  } else if (character_class === 'asc3') {
    itemSet = asc3_rewards;
  } else {
    alert('กรุณาเลือกคลาสของตัวละคร');
    return;
  }

  for (let i = 0; i < randomCount; i++) {
    const item = randomReward(itemSet);
    const elements = `
            <div>
                <div id="item"><img src="${item.img}" alt="${item.name}"> "${item.name}"</div>
            </div>
            `;
    reward.insertAdjacentHTML('beforeend', elements);
  }
}

function randomReward(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].weighted;
  }

  let rand = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (rand < item.weighted) {
      return item;
    }
    rand -= item.weighted;
  }
}

function onReset() {
  location.reload();
}
