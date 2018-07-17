const Liquid = require('../..')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-as-promised'))

describe.only('tags/increment', function () {
  var liquid = Liquid()

  it('should be post', function () {
    var src = '{% increment v %} {% increment v %}'
    return expect(liquid.parseAndRender(src)).to.eventually.equal('0 1')
  })

  it('should reuse context variables', function () {
    var src = '{% increment v %} {% increment v %}'
    return expect(liquid.parseAndRender(src, {v: 10}))
      .to.eventually.equal('10 11')
  })

  it('should be independent with assign', function () {
    var src = '{% assign v=10 %}{%increment v%} {{v}}'
    return expect(liquid.parseAndRender(src, {v: 10}))
      .to.eventually.equal('0 10')
  })
})
