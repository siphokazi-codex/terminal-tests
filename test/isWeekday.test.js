const assert = require('assert');
const isWeekday = require('../isWeekday.js');

describe('The isWeekday function', function(){

    it('should check if it is weekday', function(){
        assert.equal(false, isWeekday('S'));
    });
    it('should check if it is a weekday', function(){
        assert.equal(true, isWeekday('D'));
    });
});
