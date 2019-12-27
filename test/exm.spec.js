const { expect } = require('chai')

function sum(a, b) {
    return a + b
}

describe('exm', () => {
    it('测试小问题', () => {
        expect(sum(1, 2)).to.equal(3)
    })

})
