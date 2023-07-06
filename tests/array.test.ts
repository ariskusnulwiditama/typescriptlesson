describe('Array', () => { 
   it('should same with java script', () => {
    const fruits: string[] = ["orange", "grape", "apple", "kiwi", "banana"];
    const values: number[] = [12, 66, 78, 90];

    console.info(fruits);
    console.info(values);
   });

   it('should read only array', () => {
    const days: ReadonlyArray<string> = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    console.info(days);
   });

   it('should support tupple', () => {
    const person: readonly[string, string, number] = ["paul", "indonesia", 9000];
    console.info(person);
   });
 });