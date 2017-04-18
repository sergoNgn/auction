
import ApplicationComponent from "./application";
describe('ApplicationComponent', () => {
  it('is instantiated', () => {
    const app = new ApplicationComponent();
    expect(app instanceof ApplicationComponent).toBe(true);
  });
});
