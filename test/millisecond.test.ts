import {
  MILLISECOND_UNIT,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH_28,
  MONTH_29,
  MONTH,
  MONTH_31,
  YEAR,
  YEAR_366
} from '../src/time'

describe('millisecond', () => {
  it('MILLISECOND_UNIT to be 1', () => {
    expect(MILLISECOND_UNIT).toBe(1)
  })

  it('SECOND to be 1,000', () => {
    expect(SECOND).toBe(1000)
  })

  it('MINUTE to be 60,000', () => {
    expect(MINUTE).toBe(60000)
  })

  it('HOUR to be 3,600,000', () => {
    expect(HOUR).toBe(3600000)
  })

  it('DAY to be 86,400,000', () => {
    expect(DAY).toBe(86400000)
  })

  it('WEEK to be 604,800,000', () => {
    expect(WEEK).toBe(604800000)
  })

  it('MONTH_28 to be 2,419,200,000', () => {
    expect(MONTH_28).toBe(2419200000)
  })

  it('MONTH_29 to be 2,505,600,000', () => {
    expect(MONTH_29).toBe(2505600000)
  })

  it('MONTH to be 2,592,000,000', () => {
    expect(MONTH).toBe(2592000000)
  })

  it('MONTH_31 to be 2,678,400,000', () => {
    expect(MONTH_31).toBe(2678400000)
  })

  it('YEAR to be 31,536,000,000', () => {
    expect(YEAR).toBe(31536000000)
  })

  it('YEAR_366 to be 31,622,400,000', () => {
    expect(YEAR_366).toBe(31622400000)
  })
})
