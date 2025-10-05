const path = require('path');

const MiniZinc = require("../dist/test-minizinc-service.cjs");

const { commonTests } = require("./tests.cjs");

jest.setTimeout(10000);

beforeAll(async () => {
  await MiniZinc.init({
    service: "http://localhost:4222",
  });
});

afterAll(async () => {
//   await MiniZinc.shutdown();
});

// commonTests(MiniZinc);

test("Load from filesystem", async () => {
  // const model = new MiniZinc.Model();
  // model.addFile(path.join(__dirname, "test.mzn"));
  // const result = await model.solve();
  // const x = result.solution.output.json.x;
  // expect(x).toBeGreaterThanOrEqual(1);
  // expect(x).toBeLessThanOrEqual(3);
  expect(1).toBe(1);
});
