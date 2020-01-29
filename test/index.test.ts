import { Robot } from "../src/index";
import _ from "lodash";

const equal = (a, b) => expect(_.isEqual(a, b));

describe("name", () => {
  it("doesn't crash when constructing", () => {
    new Robot(3);
  });
  it("blocks should remain without operations", () => {
    const robot = new Robot(3);
    equal(robot.getOutput(), [[0], [1], [2]]);
  });

  describe("pile onto", () => {});
  describe("pile over", () => {
    it("one operation", () => {
      const robot = new Robot(3);
      robot.pileOver(1, 2);
      equal(robot.getOutput(), [[0], [], [2, 1]]);
    });
  });
  describe("move over", () => {});
});
