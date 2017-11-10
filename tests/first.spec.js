import { stuff } from '../src/company';

describe('First test spec', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var res = [1,2,3].indexOf(4);
      expect(res).to.equal(-1);
    });

    it('should return the expected index when the value is present', function() {
      var res = [1,2,3].indexOf(2);
      expect(res).to.equal(1);
    });
  });

  describe('company test', function () {
    it('should return an array', function () {
      var result = stuff();

      expect(result.length).to.equal(3);
      expect(result[2]).to.equal(9);
    });
  });
});