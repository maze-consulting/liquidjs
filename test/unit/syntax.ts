import Scope from 'src/scope/scope'
import { expect } from 'chai'
import { evalExp, evalValue, isTruthy } from 'src/render/syntax'

describe('expression', function () {
  let scope

  beforeEach(function () {
    scope = new Scope({
      one: 1,
      two: 2,
      empty: '',
      x: 'XXX',
      y: undefined,
      z: null,
      'has_value?': true
    })
  })

  describe('.evalValue()', function () {
    it('should eval literals', function () {
      expect(evalValue('2.3', scope)).to.equal(2.3)
      expect(evalValue('"foo"', scope)).to.equal('foo')
    })

    it('should eval variables', function () {
      expect(evalValue('23', scope)).to.equal(23)
      expect(evalValue('one', scope)).to.equal(1)
      expect(evalValue('has_value?', scope)).to.equal(true)
      expect(evalValue('x', scope)).to.equal('XXX')
    })

    it('should throw if not valid', function () {
      const fn = () => evalValue('===', scope)
      expect(fn).to.throw("cannot eval '===' as value")
    })
  })

  describe('.isTruthy()', function () {
    // Spec: https://shopify.github.io/liquid/basics/truthy-and-falsy/
    expect(isTruthy(true)).to.be.true
    expect(isTruthy(false)).to.be.false
    expect(isTruthy(null)).to.be.false
    expect(isTruthy('foo')).to.be.true
    expect(isTruthy('')).to.be.true
    expect(isTruthy(0)).to.be.true
    expect(isTruthy(1)).to.be.true
    expect(isTruthy(1.1)).to.be.true
    expect(isTruthy([1])).to.be.true
    expect(isTruthy([])).to.be.true
  })

  describe('.evalExp()', function () {
    it('should throw when scope undefined', function () {
      expect(function () {
        (evalExp as any)('')
      }).to.throw(/scope undefined/)
    })

    it('should eval simple expression', function () {
      expect(evalExp('1<2', scope)).to.equal(true)
      expect(evalExp('2<=2', scope)).to.equal(true)
      expect(evalExp('one<=two', scope)).to.equal(true)
      expect(evalExp('x contains "x"', scope)).to.equal(false)
      expect(evalExp('x contains "X"', scope)).to.equal(true)
      expect(evalExp('1 contains "x"', scope)).to.equal(false)
      expect(evalExp('y contains "x"', scope)).to.equal(false)
      expect(evalExp('z contains "x"', scope)).to.equal(false)
      expect(evalExp('(1..5) contains 3', scope)).to.equal(true)
      expect(evalExp('(1..5) contains 6', scope)).to.equal(false)
      expect(evalExp('"<=" == "<="', scope)).to.equal(true)
    })

    describe('complex expression', function () {
      it('should support value or value', function () {
        expect(evalExp('false or true', scope)).to.equal(true)
      })
      it('should support < and contains', function () {
        expect(evalExp('1<2 and x contains "x"', scope)).to.equal(false)
      })
      it('should support < or contains', function () {
        expect(evalExp('1<2 or x contains "x"', scope)).to.equal(true)
      })
      it('should support value and !=', function () {
        expect(evalExp('empty and empty != ""', scope)).to.equal(false)
      })
    })

    it('should eval range expression', function () {
      expect(evalExp('(2..4)', scope)).to.deep.equal([2, 3, 4])
      expect(evalExp('(two..4)', scope)).to.deep.equal([2, 3, 4])
    })
  })
})
