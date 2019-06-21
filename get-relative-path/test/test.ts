import getRelativePath = require('../index');
import { expect } from 'chai';

describe('allTests()', function () {

  describe('Successful Tests', function () {

    it('from directory', function () {
      expect(getRelativePath('/from/', '/to')).to.equal('../to');
    });

    it('from file', function () {
      expect(getRelativePath('/from', '/to')).to.equal('to');
    });

    it('from ancestor directory', function () {
      expect(getRelativePath('/p/foo/', '/p/foo/bar/baz')).to.equal('bar/baz');
    });

    it('from ancestor directory to directory', function () {
      expect(getRelativePath('/p/foo/', '/p/foo/bar/baz/')).to.equal('bar/baz/');
    });

    it('to self dir', function () {
      expect(getRelativePath('/p/foo/', '/p/foo/')).to.equal('./');
    });

    it('to self non-dir', function () {
      expect(getRelativePath('/p/foo', '/p/foo')).to.equal('foo');
    });

    it('to self dir to non-dir', function () {
      expect(getRelativePath('/p/foo/', '/p/foo')).to.equal('../foo');
    });

    it('to self non-dir to dir', function () {
      expect(getRelativePath('/p/foo', '/p/foo/')).to.equal('foo/');
    });

    it('to parent dir of file', function () {
      expect(getRelativePath('/p/foo/bar', '/p/foo/')).to.equal('./');
    });

    it('to parent directory 1', function () {
      expect(getRelativePath('/p/foo/bar/', '/p/foo')).to.equal('../../foo');
    });

    it('to parent directory 2', function () {
      expect(getRelativePath('/p/foo/bar/', '/p/foo/')).to.equal('../');
    });

    it('non-absolute test 1', function () {
      expect(getRelativePath('content/posts/post', 'content/media')).to.equal('../media');
    });

    it('non-absolute test 2', function () {
      expect(getRelativePath('content/posts/', 'content/media')).to.equal('../media');
    });

    it('non-absolute test 3', function () {
      expect(getRelativePath('content/posts/', 'content/media/')).to.equal('../media/');
    });

    it('Node Example', function () {
      expect(getRelativePath('/data/orandea/test/aaa/', '/data/orandea/impl/bbb')).to.equal('../../impl/bbb');
    });

  });

  describe('Invalid Usage', function () {

    it('relative and absolute', function () {
      try {
        getRelativePath('content/posts/', '/content/media/');
        throw new Error('not supposed to succeed');
      } catch (err) {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Mixed absolute and relative paths');
      }
    });

    it('absolute and relative', function () {
      try {
        getRelativePath('content/posts/', '/content/media/');
        throw new Error('not supposed to succeed');
      } catch (err) {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Mixed absolute and relative paths');
      }
    });

    it('empty from', function () {
      try {
        getRelativePath('', '/content/media/');
        throw new Error('not supposed to succeed');
      } catch (err) {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Invalid or empty paths');
      }
    });

    it('empty to', function () {
      try {
        getRelativePath('/content/media/', '');
        throw new Error('not supposed to succeed');
      } catch (err) {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Invalid or empty paths');
      }
    });

  });

});
