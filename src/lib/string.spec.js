import {commaSeparatedToArray, ascAlphapetical, noDuplicates, capitalize} from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray("a,b")
      expect(result).toEqual(["a", "b"])
    })
    it('returns ["a", "b"] for text "a  , b    "', () => {
      const result = commaSeparatedToArray("a  , b    ")
      expect(result).toEqual(["a", "b"])
    })
    it('returns ["ab", "c"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('a b, c')
      expect(result).toEqual(['a b', 'c'])
    })
    it('returns ["Jane", "John", "Bob"] for text "Jane, John, Bob"', () => {
      const result = commaSeparatedToArray("Jane, John, Bob")
      expect(result).toEqual(["Jane", "John", "Bob"])
    })
    it('returns the array in ascending alphabetical order', () => {
      const result = ascAlphapetical("Glurak, Zapdos, Jugong, Bisasam")
      expect(result).toEqual(["Bisasam", "Glurak", "Jugong", "Zapdos"])
    })
    it('contains each string only once in the resulting array', () => {
      const result = noDuplicates("Glurak, Zapdos, Jugong, Bisasam, Zapdos, Jugong, Arktos")
      expect(result).toEqual(["Glurak", "Zapdos", "Jugong", "Bisasam", "Arktos"])
    })
    it('returns all items in title case ("pikachu" -> "Pikachu")', () => {
      const result = capitalize("pikachu, bisasam, glumanda")
      expect(result).toEqual(["Pikachu", "Bisasam", "Glumanda"])
    })
  })
})