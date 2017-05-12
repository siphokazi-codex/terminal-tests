const assert = require('assert');
const yearsAgo = require('../yearsAgo.js');

describe('The yearsAgo function', function(){

    it('should count the registration numbers received', function(){
      assert.equal(11, yearsAgo('2006'));
    });
    it('should count the registration numbers received', function(){
        assert.equal(41, yearsAgo('1976'));
    });
    it('should count if registration numbers received', function(){
        // this test will fail - can you fix it
        assert.equal(10, yearsAgo('2007'));
    });
});
