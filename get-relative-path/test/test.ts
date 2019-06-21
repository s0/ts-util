import getRelativePath = require('../index');
import { expect } from 'chai';

describe('allTests()', function () {

    it('basic usage', function () {
      expect(getRelativePath('/from/', '/to')).to.equal('../to');
    });

});
