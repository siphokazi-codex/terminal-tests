const assert = require('assert');
const fromWhere = require('../fromWhere.js');

describe('The fromWhere function', function(){

    it('Checks which town using registration number', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('Checks which town using registration number', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it('Checks which town using registration number', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('Checks which town using registration number', function(){
        assert.equal('Some other place!', fromWhere(''));
    });
});
