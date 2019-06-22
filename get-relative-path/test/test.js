"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRelativePath = require("../index");
const chai_1 = require("chai");
describe('allTests()', function () {
    describe('Successful Tests', function () {
        it('from directory', function () {
            chai_1.expect(getRelativePath('/from/', '/to')).to.equal('../to');
        });
        it('from file', function () {
            chai_1.expect(getRelativePath('/from', '/to')).to.equal('to');
        });
        it('from ancestor directory', function () {
            chai_1.expect(getRelativePath('/p/foo/', '/p/foo/bar/baz')).to.equal('bar/baz');
        });
        it('from ancestor directory to directory', function () {
            chai_1.expect(getRelativePath('/p/foo/', '/p/foo/bar/baz/')).to.equal('bar/baz/');
        });
        it('to self dir', function () {
            chai_1.expect(getRelativePath('/p/foo/', '/p/foo/')).to.equal('./');
        });
        it('to self non-dir', function () {
            chai_1.expect(getRelativePath('/p/foo', '/p/foo')).to.equal('foo');
        });
        it('to self dir to non-dir', function () {
            chai_1.expect(getRelativePath('/p/foo/', '/p/foo')).to.equal('../foo');
        });
        it('to self non-dir to dir', function () {
            chai_1.expect(getRelativePath('/p/foo', '/p/foo/')).to.equal('foo/');
        });
        it('to parent dir of file', function () {
            chai_1.expect(getRelativePath('/p/foo/bar', '/p/foo/')).to.equal('./');
        });
        it('to parent directory 1', function () {
            chai_1.expect(getRelativePath('/p/foo/bar/', '/p/foo')).to.equal('../../foo');
        });
        it('to parent directory 2', function () {
            chai_1.expect(getRelativePath('/p/foo/bar/', '/p/foo/')).to.equal('../');
        });
        it('non-absolute test 1', function () {
            chai_1.expect(getRelativePath('content/posts/post', 'content/media')).to.equal('../media');
        });
        it('non-absolute test 2', function () {
            chai_1.expect(getRelativePath('content/posts/', 'content/media')).to.equal('../media');
        });
        it('non-absolute test 3', function () {
            chai_1.expect(getRelativePath('content/posts/', 'content/media/')).to.equal('../media/');
        });
        it('Node Example', function () {
            chai_1.expect(getRelativePath('/data/orandea/test/aaa/', '/data/orandea/impl/bbb')).to.equal('../../impl/bbb');
        });
        it('Node Example Relative', function () {
            chai_1.expect(getRelativePath('data/orandea/test/aaa/', 'data/orandea/impl/bbb')).to.equal('../../impl/bbb');
        });
        it('Node Example Relative', function () {
            chai_1.expect(getRelativePath(new URL('https://localhost/data/orandea/test/aaa/').pathname, new URL('https://localhost/data/orandea/impl/bbb').pathname)).to.equal('../../impl/bbb');
        });
    });
    describe('Invalid Usage', function () {
        it('relative and absolute', function () {
            try {
                getRelativePath('content/posts/', '/content/media/');
                throw new Error('not supposed to succeed');
            }
            catch (err) {
                chai_1.expect(err).to.be.an.instanceOf(Error);
                chai_1.expect(err.message).to.equal('Mixed absolute and relative paths');
            }
        });
        it('absolute and relative', function () {
            try {
                getRelativePath('content/posts/', '/content/media/');
                throw new Error('not supposed to succeed');
            }
            catch (err) {
                chai_1.expect(err).to.be.an.instanceOf(Error);
                chai_1.expect(err.message).to.equal('Mixed absolute and relative paths');
            }
        });
        it('empty from', function () {
            try {
                getRelativePath('', '/content/media/');
                throw new Error('not supposed to succeed');
            }
            catch (err) {
                chai_1.expect(err).to.be.an.instanceOf(Error);
                chai_1.expect(err.message).to.equal('Invalid or empty paths');
            }
        });
        it('empty to', function () {
            try {
                getRelativePath('/content/media/', '');
                throw new Error('not supposed to succeed');
            }
            catch (err) {
                chai_1.expect(err).to.be.an.instanceOf(Error);
                chai_1.expect(err.message).to.equal('Invalid or empty paths');
            }
        });
    });
});
