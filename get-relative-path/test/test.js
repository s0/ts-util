"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRelativePath = require("../index");
const chai_1 = require("chai");
describe('allTests()', function () {
    it('basic usage', function () {
        chai_1.expect(getRelativePath('/from/', '/to')).to.equal('../to');
    });
});
