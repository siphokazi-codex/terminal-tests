const assert = require('assert');
const countRegNumber = require('../countRegNumber.js');

describe('The countRegNumber function', function(){

    it('should count the registration numbers received', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should count if registration numbers received', function(){
        assert.equal(4, countRegNumber('CA 182736,CY 523519,CJ 812328, CA 42665'));
    });
});
