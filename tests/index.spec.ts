import { Application } from "@/index";

describe("Application", () => {
  it("should run the application", () => {
    const application = new Application();
    expect(application.run()).toBe("HELLO WORLD");
  });
});
