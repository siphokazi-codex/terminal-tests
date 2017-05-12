const assert = require('assert');
const regCheck = require('../regCheck.js');

describe('The regCheck function', function(){

    it('checks if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('checks if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(false, regCheck(' ', 'CD'));
    });
});
