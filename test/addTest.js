const assert = require('chai').assert;
const addNumbers = require('../add').addNumbers;

describe('Add', function(){
    it('addNumbers should be above 10', function(){
        let result = addNumbers(4, 7);
        assert.isAbove(result, 10);
    });
});