const array = [
  {
    week: "2024-09-02T00:00:00.000Z",
    cat_name: "Food",
    total_amount: 400000,
  },
  {
    week: "2024-09-02T00:00:00.000Z",
    cat_name: "investment",
    total_amount: 200000,
  },
  {
    week: "2024-09-02T00:00:00.000Z",
    cat_name: "other",
    total_amount: 200000,
  },
  {
    week: "2024-09-02T00:00:00.000Z",
    cat_name: "rent",
    total_amount: 200000,
  },
  {
    week: "2024-09-02T00:00:00.000Z",
    cat_name: "shopping",
    total_amount: 200000,
  },
];
let value = 0;
const info = array.map(({ total_amount }) => (value += total_amount));
console.log(value);
// const data = array.map(({ cat_name, total_amount }) => ({
//   name: cat_name,
//   y: total_amount,
// }));
// console.log("data", data);
