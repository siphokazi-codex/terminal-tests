const assert = require('assert');
const countAllFromTown = require('../countAllFromTown.js');

describe('The countAllFromTown function', function(){

    it('should check if registration numbers from Town', function(){
        assert.equal(0, countAllFromTown('CY 567','CJ'));
    });
    it('should check if registration numbers from Town', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
});
