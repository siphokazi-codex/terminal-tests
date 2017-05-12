const assert = require('assert');
const transportFee = require('../transportFee.js');

describe('The transportFee function', function(){

    it('should count the registration numbers received', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should count if registration numbers received', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    it('should count the registration numbers received', function(){
        assert.equal('free', transportFee('nightshift'));
    });
});
