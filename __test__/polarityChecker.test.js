import { polarityChecker } from "../src/client/js/polarityChecker";


describe('Testing polarity translation functionality', () => {

  test('Testing the polarityChecker() function', () => {

      expect(polarityChecker('P+')).toBe('STRONG POSITIVE')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker('P')).toBe('POSITIVE')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker('NEW')).toBe('NEUTRAL')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker('N')).toBe('NEGATIVE')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker('N+')).toBe('STRONG NEGATIVE')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker('NONE')).toBe('NO SENTIMENT')
  })

  test('Testing the polarityChecker() function', () => {
      expect(polarityChecker).toBeDefined();
  })

});