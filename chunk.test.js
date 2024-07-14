const chunkArray = require("./chunk");

test("Chunk an array of 10 values into 5 separate chunks", () => {
  const chunkedArr = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
  expect(chunkedArr.length).toBe(5);
});

test("Chunk an array of 10 values with a length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
