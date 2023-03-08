/*
create objects
create properties
possible property values
iterating through objects
*/

let example_order = {
  client: "mary castro",
  date: "2020-09-10T00:00:00-05:00",
  dateCreated: "2020-09-09T11:00:52-05:00",
  deliver: "2020-09-11T00:00:00-05:00",
  paid: "2020-09-15T15:20:57-05:00",
  paymentMethod: "transferencia",
  products: [
    {
      code: "010312",
      name: "pan de queso costeño medio",
      quantity: "1",
      total: 20000,
      unitPrice: "20000",
    },
    {
      code: "000001",
      name: "domicilio",
      quantity: 1,
      total: 5000,
      unitPrice: "5000",
    },
    {
      code: "010221",
      name: "pan integral  pequeño",
      quantity: 1,
      total: 10000,
      unitPrice: "10000",
    },
  ],
  sameDayDelivery: false,
  total: 35000,
};

let example_clients = [
  {
    address: "calle 83 # 42d - 123 apto 804",
    birthday: "2020-12-13",
    category: "recomendacion",
    cc: "8487673",
    comment: "",
    email: "d.escaf85@gmail.com",
    history: [],
    name: "david escaf",
    phone: "3008167074",
    since: "2019-01-07T00:00:00-05:00",
  },
  {
    address: "calle 75 # 54 80",
    birthday: "",
    category: "",
    cc: "1140814809",
    comment: "",
    email: "pablobs1@yahoo.com",
    name: "pablo bustillo",
    phone: "3165856916",
    since: "2019-01-08T00:00:00-05:00",
  },
];

let orders = [
  {
    name: "original grande",
    quantity: 1,
    test: "hello",
    total: 20000,
    unitPrice: 20000,
  },

  {
    name: "helado de maracuya",
    quantity: 1,
    total: 25000,
    unitPrice: 25000,
  },

  {
    name: "original grande",
    quantity: 1,
    test: "hello",
    total: 20000,
    unitPrice: 20000,
  },

  {
    name: "pan integral y avena grande",
    quantity: 1,
    test: "hello",
    total: 25000,
    unitPrice: 25000,
  },

  {
    name: "pan integral y avena grande",
    quantity: 1,
    test: "hello",
    total: 25000,
    unitPrice: 25000,
  },

  {
    name: "pan integral y avena grande",
    quantity: 1,
    test: "hello",
    total: 25000,
    unitPrice: 25000,
  },

  {
    name: "pan 5 semillas mediano",
    quantity: 1,
    test: "hello",
    total: 20000,
    unitPrice: "20000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "pan integral y avena grande",
    quantity: 1,
    test: "hello",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "pan integral y avena grande",
    quantity: 1,
    test: "hello",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "pan de banano y semillas de girasol",
    quantity: 1,
    total: 20000,
    unitPrice: "20000",
  },
  {
    name: "pan de hamburguesa",
    quantity: "6",
    total: 6000,
    unitPrice: "1000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "pan integral y avena grande",
    quantity: "1",
    test: "hello",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "pan integral y avena grande",
    quantity: "1",
    test: "hello",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "pan integral y avena grande",
    quantity: "1",
    total: 25000,
    unitPrice: "25000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "mini torta de zanahoria",
    quantity: "4",
    total: 8000,
    unitPrice: "2000",
  },
  {
    name: "mini torta de naranja",
    quantity: "2",
    total: 5000,
    unitPrice: "2500",
  },
  {
    name: "mini torta de banano",
    quantity: "4",
    total: 8000,
    unitPrice: "2000",
  },

  {
    name: "pan integral",
    quantity: "5",
    total: 125000,
    unitPrice: "25000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 0,
    unitPrice: "0",
  },

  {
    name: "pan integral de semillas mediano",
    quantity: "1",
    total: 20000,
    unitPrice: "20000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "pan integral",
    quantity: "1",
    total: 25000,
    unitPrice: "25000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "pan de chocolate mediano",
    quantity: "1",
    total: 0,
    unitPrice: "0",
  },

  {
    name: "pan integral de chocolate mediano",
    quantity: 1,
    total: 0,
    unitPrice: "0",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 0,
    unitPrice: "0",
  },
  {
    name: "pan de chocolate mediano",
    quantity: "1",
    total: 0,
    unitPrice: "0",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de queso grande",
    quantity: 1,
    total: 30000,
    unitPrice: "30000",
  },
  {
    name: "pan integral de chocolate mediano",
    quantity: "2",
    total: 60000,
    unitPrice: "30000",
  },

  {
    name: "pan de bono paquete",
    quantity: 1,
    total: 24000,
    unitPrice: "24000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de queso pequeño",
    quantity: 1,
    total: 10000,
    unitPrice: "10000",
  },
  {
    name: "pan integral de chocolate pequeño",
    quantity: "1",
    total: 15000,
    unitPrice: "15000",
  },

  {
    name: "pan de bono paquete",
    quantity: 1,
    total: 24000,
    unitPrice: "24000",
  },
  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de queso pequeño",
    quantity: 1,
    total: 10000,
    unitPrice: "10000",
  },
  {
    name: "pan integral de chocolate pequeño",
    quantity: "1",
    total: 15000,
    unitPrice: "15000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral",
    quantity: "1",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral",
    quantity: "1",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral",
    quantity: "1",
    total: 25000,
    unitPrice: "25000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },

  {
    name: "domicilio",
    quantity: 1,
    total: 5000,
    unitPrice: "5000",
  },
  {
    name: "pan integral de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },

  {
    name: "pan integral",
    quantity: 1,
    total: 25000,
    unitPrice: "25000",
  },
  {
    name: "pan de semillas grande",
    quantity: 1,
    total: 35000,
    unitPrice: "35000",
  },
  {
    name: "pan de queso costeño grande",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },

  {
    name: "pan integral",
    quantity: 1,
    total: 0,
    unitPrice: "0",
  },
  {
    name: "pan de semillas grande",
    quantity: 1,
    total: 0,
    unitPrice: "0",
  },
  {
    name: "pan de queso costeño grande",
    quantity: "1",
    total: 0,
    unitPrice: "0",
  },

  {
    name: "pan de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },
  {
    name: "pan 5 semillas mediano",
    quantity: 1,
    total: 20000,
    unitPrice: "20000",
  },
  {
    name: "domicilio",
    quantity: "1",
    total: 0,
    unitPrice: "0",
  },

  {
    name: "pan de chocolate mediano",
    quantity: "1",
    total: 30000,
    unitPrice: "30000",
  },
  {
    name: "domicilio",
    quantity: "1",
    total: 0,
    unitPrice: "0",
  },

  {
    name: "pan 5 semillas mediano",
    quantity: "1",
    total: 20000,
    unitPrice: "20000",
  },
  {
    name: "domicilio",
    quantity: "1",
    total: 5000,
    unitPrice: "5000",
  },

  {
    name: "pan 5 semillas mediano",
    quantity: "2",
    total: 40000,
    unitPrice: "20000",
  },
  {
    name: "domicilio",
    quantity: "1",
    total: 5000,
    unitPrice: "5000",
  },

  {
    code: "010313",
    name: "pan de queso costeño grande",
    quantity: 1,
    total: 30000,
    unitPrice: "30000",
  },
  {
    code: "010713",
    name: "pan de semillas grande",
    quantity: 1,
    total: 35000,
    unitPrice: "35000",
  },
  {
    code: "010223",
    name: "pan integral",
    quantity: "2",
    total: 50000,
    unitPrice: "25000",
  },
  {
    code: "000001",
    name: "domicilio",
    quantity: "1",
    total: 5000,
    unitPrice: "5000",
  },

  {
    code: "010313",
    name: "pan de queso costeño grande",
    quantity: 1,
    total: 30000,
    unitPrice: "30000",
  },
  {
    code: "010713",
    name: "pan de semillas grande",
    quantity: 1,
    total: 35000,
    unitPrice: "35000",
  },
  {
    code: "010223",
    name: "pan integral",
    quantity: "2",
    total: 50000,
    unitPrice: "25000",
  },
  {
    code: "000001",
    name: "domicilio",
    quantity: "1",
    total: 15000,
    unitPrice: "15000",
  },

  {
    code: "010922",
    name: "pan integral de chocolate mediano",
    quantity: 1,
    total: 30000,
    unitPrice: "30000",
  },
  {
    code: "000001",
    name: "domicilio",
    quantity: "1",
    total: 5000,
    unitPrice: "5000",
  },

  {
    code: "010223",
    name: "integral y avena 25% dcto",
    quantity: 1,
    total: 18750,
    unitPrice: "18750",
  },
  {
    code: "010323",
    name: "integral queso costeño 25% dcto",
    quantity: 1,
    total: 22500,
    unitPrice: "22500",
  },
  {
    code: "010723",
    name: "integral 5 semillas 25% dcto",
    quantity: 1,
    total: 26250,
    unitPrice: "26250",
  },
  {
    code: "000001",
    name: "domicilio",
    quantity: "1",
    total: 15000,
    unitPrice: "15000",
  },
];
