// CODE
function maskify(cc) {
    if (cc.length > 4) {
        let numbers = (cc[cc.length - 4] + cc[cc.length - 3] + cc[cc.length - 2] + cc[cc.length - 1])
        let hashTags = ''
        for (let i = 0; i < cc.length - 4; i++) {
            hashTags += '#'
        }
        return hashTags + numbers
    } else {
        return cc
    }

}

// TESTS

maskify('4556364607935616')
maskify('1')
maskify('11111')