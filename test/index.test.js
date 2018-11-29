import utils from '../util/index';
import expect from 'expect.js'

describe("computeUnion", function() {
  it("It should return proper union when range intercets with right end of sorted end", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [7001, 6001], range: [[7003, 7008]]};
    expect(utils.computeUnion(a1, a2).join(',')).to.equal([6001,7000,7001,7002,7003,7004,7005,7006,7007,7008].join(','));
  });
  it("It should return proper union when range intercets with left end of sorted end", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[6998, 7001]]};
    expect(utils.computeUnion(a1, a2).join(',')).to.equal([6998,6999,7000,7001,7002,7003,7004,7005].join(','));
  });
  it("It should return proper union when range is bigger than least and most ele", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[6998, 7008]]};
    expect(utils.computeUnion(a1, a2).join(',')).to.equal([6998,6999,7000,7001,7002,7003,7004,7005,7006,7007,7008].join(','));
  });
  it("It should return proper union when range is smaller than least and most ele", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[7001, 7004]]};
    expect(utils.computeUnion(a1, a2).join(',')).to.equal([7000,7001,7002,7003,7004,7005].join(','));
  });
});

describe("computeIntersecion", function() {
  it("It should return proper intersecion when range intercets with right end of sorted end", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [6000,7001], range: [[7003, 7008]]};
    expect(utils.computeIntersecion(a1, a2).join(',')).to.equal([7003,7004,7005].join(','));
  });
  it("It should return proper intersecion when range intercets with left end of sorted end", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[6998, 7001]]};
    expect(utils.computeIntersecion(a1, a2).join(',')).to.equal([7000,7001].join(','));
  });
  it("It should return proper intersecion when range is bigger than least and most ele", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[6998, 7008]]};
    expect(utils.computeIntersecion(a1, a2).join(',')).to.equal([7000,7001,7002,7003,7004,7005].join(','));
  });
  it("It should return proper intersecion when range is smaller than least and most ele", function() {
    var a1 = [7000,7001,7002,7003,7004,7005];
    var a2 = {eles: [], range: [[7001, 7004]]};
    expect(utils.computeIntersecion(a1, a2).join(',')).to.equal([7001,7002,7003,7004].join(','));
  });
});
