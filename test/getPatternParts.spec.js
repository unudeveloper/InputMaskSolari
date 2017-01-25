import chai from 'chai'
import getPatternParts from '../src/getPatternParts.js'
import {convertPatternToPlaceholder} from '../src/utilities.js'

const expect = chai.expect

describe('getPatternParts', () => {
  it('returns an array of editable areas', () => {
    expect(getPatternParts()).to.be.an('array')
  })

  it('takes a placeholder', () => {
    expect(() => getPatternParts(convertPatternToPlaceholder('11/11'))).to.not.throw()
  })

  it('returns the number of editable areas in a placeholder', () => {
    expect(getPatternParts('__/__').length).to.equal(2)
  })

  it('returns an array of 3 for __/__/____', () => {
    expect(getPatternParts('__/__/____').length).to.equal(3)
  })

  it('tells us the length of each editable area', () => {
    const patternParts = getPatternParts('__/__/____')

    expect(patternParts[0].length).to.equal(2)
    expect(patternParts[1].length).to.equal(2)
    expect(patternParts[2].length).to.equal(4)
  })

  it('tells us what character delimits the editable area', () => {
    const patternParts = getPatternParts('__/__|____')

    expect(patternParts[0].delimiter).to.equal('/')
    expect(patternParts[1].delimiter).to.equal('|')
    expect(patternParts[2].delimiter).to.equal(undefined)
  })

  it('knows how to process pattern `(111) 111-1111`', () => {
    const patternParts = getPatternParts('(111) 111-1111')

    expect(patternParts).to.deep.equal([
      {length: 0, delimiter: '('},
      {length: 3, delimiter: ')'},
      {length: 0, delimiter: ' '},
      {length: 3, delimiter: '-'},
      {length: 4, delimiter: undefined}
    ])
  })
})
