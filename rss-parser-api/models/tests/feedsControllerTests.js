const should = require('should');
const sinon = require('sinon');
const controller = require('../../controllers/feedsController');

describe('Feeds Controller Tests:', () => {
  describe('GET', () => {
    it('Should not allow an empty category', () => {
      const req = {
        query: { }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      const controller = controller();
      controller.get(req, res);

      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Category is required').should.equal(true);
    });
  });
});