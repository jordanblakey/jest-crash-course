const isAnagram = require("./anagram");

const initDatabase = () => console.log("Database initialized...");
const closeDatabase = () => console.log("Database closed...");

beforeAll(() => {
  console.log("This runs just once beforeAll tests");
  initDatabase();
});

afterAll(() => {
  console.log("This runs just once afterAll tests");
  closeDatabase();
});

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => {
    nameCheck();
  });

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });

  afterEach(() => {});
});

describe("isAnagram Tests", () => {
  test("isAnagram function exists", () => {
    expect(typeof isAnagram).toEqual("function");
  });

  test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
  });

  test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
  });

  test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram("Hello", "Aloha")).toBeFalsy();
  });
});
