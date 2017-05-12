const assert = require('assert');
const countAllPaarl = require('../countAllPaarl.js');

describe('The countAllPaarl function', function(){

    it('should count the registration numbers from Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 182736, CJ 523519, CJ 812328'));
    });
    it('should count if registration numbers from Paarl', function(){
        assert.equal(1, countAllPaarl('CJ 42665'));
    });
});
