const assert = require('assert');
const package = require("../index.js");

describe("getStatus", function () {
    describe("promise", function () {
        it("should return data without an exception", function () {
            assert.doesNotReject(package("2b2t.org"));
        });
    })
    describe("callback", function () {
        it("should return data without an exception", function (done) {
            package("2b2t.org", 25565, function (err, body){
                if (err){
                    throw err;
                }
                done();
            });
        });
    })
});
