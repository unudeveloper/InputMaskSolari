import conformToMask from '../src/conformToMask.js'
import chai from 'chai'

const expect = chai.expect

describe('conformToMask', () => {
  describe('simple transformations', () => {
    describe('given mask 11/11/1111', () => {
      const mask = '11/11/1111'

      it('transforms 1__/__/____ to 1_/__/____', () => {
        expect(conformToMask(
          '1__/__/____',
          mask
        )).to.equal('1_/__/____')
      })

      it('transforms 11_/__/____ to 11/__/____', () => {
        expect(conformToMask(
          '11_/__/____',
          mask
        )).to.equal('11/__/____')
      })

      it('transforms 1111 to 11/11/____', () => {
        expect(conformToMask('1111', mask)).to.equal('11/11/____')
      })

      it('transforms 23892389 to 23/89/2389', () => {
        expect(conformToMask('23892389', mask)).to.equal('23/89/2389')
      })

      it('transforms 2389238 to 23/89/238_', () => {
        expect(conformToMask('2389238', mask)).to.equal('23/89/238_')
      })
    })

    describe('given mask (111) 111-1111', () => {
      const mask = '(111) 111-1111'

      it('transforms 777 to (777) ___-___', () => {
        expect(conformToMask('777', mask)).to.equal('(777) ___-____')
      })

      it('transforms 7771 to (777) 1__-___', () => {
        expect(conformToMask('7771', mask)).to.equal('(777) 1__-____')
      })
    })
  })

  describe('transformations for sparse inputs', () => {
    describe('given mask 11/11/1111', () => {
      const mask = '11/11/1111'

      it('transforms 1_/__/___1_ to 1_/__/___1', () => {
        expect(conformToMask('1_/__/___1_', mask)).to.equal('1_/__/___1')
      })

      it('transforms 1_/1__/___1 to 1_/1_/___1', () => {
        expect(conformToMask('1_/1__/___1', mask)).to.equal('1_/1_/____')
      })
    })
  })

  describe('simple transformations', () => {
    it('does its thing', () => {
      expect(conformToMask('2', '11/11')).to.equal('2_/__')
    })
  })
})
