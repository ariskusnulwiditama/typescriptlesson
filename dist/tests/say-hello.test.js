import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello Joko', function () {
        expect(sayHello('Joko')).toBe('Hello Joko');
    });
});
