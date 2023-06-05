const user = {
  id: "1",
  firstName: "Juan",
  lastName: "Vargas",
  email: "juan@juan.com",
  phone: "3127052879",
  profileImage: "",
  sourceBalance: [],
  thriftsBalance: [],
  pocketsBalance: [],
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
};

const earning = {
  id: "1",
  earningName: "salary",
  earningQuantity: 1000000,
  recurrent: false,
  Frecuency: "Monhly",
  paymentDate1: {
    $date: "2023-06-30T05:00:00.000Z",
  },
  received: false,
  comments: "",
  funId: "",
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
};

const expense = {
  id: "1",
  expenseName: "last night dinner",
  expenseQuantity: 100000,
  recurrent: false,
  frecuency: "once",
  expenseDate1: {
    $date: "2023-06-29T05:00:00.000Z",
  },
  paid: true,
  comments: "",
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  fundId: "",
  expenseCategory: "",
};

const thrift = {
  id: "1",
  thriftName: "",
  description: "",
  amount: 1,
  dueDate: {
    $date: "2023-05-31T13:29:00.863Z",
  },
  actualAmount: 1,
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
};

const pocket = {
  id: "1",
  pocketName: "",
  description: "",
  amount: 1,
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
};

const source = {
  id: "1",
  sourceName: "bscs account",
  sourceEarning: [],
  sourceExpense: [],
  createdAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
  modofiedAt: {
    $date: "2023-07-04T05:00:00.000Z",
  },
};

module.exports = { user, earning, expense, thrift, pocket, source };
