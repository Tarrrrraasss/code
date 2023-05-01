const { combineAndRemoveZ, checkLoginAndPassword } = require('../src/task.js');

// Юніт-тести для функції combineAndRemoveZ
test('Combines and removes z from strings correctly', () => {
    // Перевірка на коректність об'єднання рядків та видалення символу "z"
    expect(combineAndRemoveZ(['hello', 'world'])).toBe('helloworld');
    
    // Перевірка на коректність об'єднання рядків та видалення символу "z" з порожнього рядку
    expect(combineAndRemoveZ(['', ''])).toBe('');
    
    // Перевірка на коректність об'єднання рядків без видалення символу "z"
    expect(combineAndRemoveZ(['hello', 'zoo'])).toBe('hellooo');
});

test('checkLoginAndPassword should return the correct secret phrase for valid login and password', () => {
    expect(checkLoginAndPassword('user1', 'pass1')).toBe('Secret phrase 1');
    expect(checkLoginAndPassword('user2', 'pass2')).toBe('Secret phrase 2');
    expect(checkLoginAndPassword('user3', 'pass3')).toBe('Secret phrase 3');
});

test('checkLoginAndPassword should return "Invalid login or password" for invalid login or password', () => {
    expect(checkLoginAndPassword('user1', 'wrongpass')).toBe('Invalid login or password');
    expect(checkLoginAndPassword('wronguser', 'pass1')).toBe('Invalid login or password');
});
