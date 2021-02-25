import {add} from './math'

describe('lib/math', () => {
	describe('add', () => {
		it('returns the sum of calculation 4 + 3, which is 7', () => {
			const result = add(4, 3)
      // assertion library
      expect(result).toBe(7)
    })

		it('returns the sum of -2 + -3, which is -5', () => {
			const result = add(-2, -3)
      // assertion library
      expect(result).toBe(-5)
    })

		it('returns the sum of 8 + 0, which is 8', () => {
			const result = add(8, 0)
      // assertion library
      expect(result).toBe(8)
    })

    it('returns the sum of 1,2,3,4,5 (=15)', () => {
      const result = add(1,2,3,4,5)
      // assertion library
      expect(result).toBe(15)
    })

	})
})