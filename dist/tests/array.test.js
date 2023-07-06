"use strict";
describe('Array', () => {
    it('should same with java script', () => {
        const fruits = ["orange", "grape", "apple", "kiwi", "banana"];
        const values = [12, 66, 78, 90];
        console.info(fruits);
        console.info(values);
    });
    it('should read only array', () => {
        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        days[2] = "rebo";
    });
});
