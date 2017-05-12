const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill.js');

describe('The totalPhoneBill function', function(){

    it('Calculate the total bill for the data provided.', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R5.50', totalPhoneBill('call, call'));
        assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });
    it('Calculate the total bill for the data provided', function(){
        // this test will fail - can you fix it?
        assert.equal('R0.00', totalPhoneBill(''));
    });
});
