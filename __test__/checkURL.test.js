import {checkForUrl} from '../src/client/js/checkURL'
describe("Check url ", () => {
    test("it should check if the url valid or not", () => {
      const url= "https://www.url1.dev"
      const output = true;
  
      expect(checkForUrl(url)).toEqual(output)

    });
  });
  describe("Check url ", () => {
    test("it should check if the url valid or not", () => {

      const url= "this not url"
      const output = false;

      expect(checkForUrl(url)).toEqual(output)
    });
  });