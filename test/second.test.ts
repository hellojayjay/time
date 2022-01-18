import {
  SECOND_PER_DAY,
  SECOND_PER_HOUR,
  SECOND_PER_MONTH,
  SECOND_PER_MONTH_28,
  SECOND_PER_MONTH_29,
  SECOND_PER_MONTH_31,
  SECOND_PER_WEEK,
  SECOND_PER_YEAR,
  SECOND_PER_YEAR_366,
  SECOND_UNIT,
  SECOND_PER_MINUTE
} from './../src/time'

describe('millisecond', () => {
  it('SECOND_UNIT to be 1', () => {
    expect(SECOND_UNIT).toBe(1)
  })

  it('SECOND_PER_MINUTE to be 60', () => {
    expect(SECOND_PER_MINUTE).toBe(60)
  })

  it('SECOND_PER_HOUR to be 3,600', () => {
    expect(SECOND_PER_HOUR).toBe(3600)
  })

  it('SECOND_PER_DAY to be 86,400', () => {
    expect(SECOND_PER_DAY).toBe(86400)
  })

  it('SECOND_PER_WEEK to be 604,800', () => {
    expect(SECOND_PER_WEEK).toBe(604800)
  })

  it('MONTH_28 to be 2,419,200', () => {
    expect(SECOND_PER_MONTH_28).toBe(2419200)
  })

  it('SECOND_PER_MONTH_29 to be 2,505,600', () => {
    expect(SECOND_PER_MONTH_29).toBe(2505600)
  })

  it('SECOND_PER_MONTH to be 2,592,000', () => {
    expect(SECOND_PER_MONTH).toBe(2592000)
  })

  it('SECOND_PER_MONTH_31 to be 2,678,400', () => {
    expect(SECOND_PER_MONTH_31).toBe(2678400)
  })

  it('SECOND_PER_YEAR to be 31,536,000', () => {
    expect(SECOND_PER_YEAR).toBe(31536000)
  })

  it('SECOND_PER_YEAR_366 to be 31,622,400', () => {
    expect(SECOND_PER_YEAR_366).toBe(31622400)
  })
})
