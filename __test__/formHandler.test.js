import { handleSubmit } from "../src/client/js/formHandler";

describe("Check form handler functionaity ", () => {
    test("it should check if the handlesSubmt work or not", () => {
      expect(handleSubmit).toBeDefined();
    });
  });