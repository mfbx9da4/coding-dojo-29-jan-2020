import Robot from "../src/index";
import _ from 'lodash';

describe("name", () => {
    it("doesn't crash when constructing", () => {
      const robot = new Robot(3);
    });
    it("blocks should remain without operations", () => {
        const robot = new Robot(3)
        expect(_.isEqual(robot.getOutput(),[[0], [1], [2]])).toBe(true);
    });
});
