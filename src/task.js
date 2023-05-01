// Функція, яка об'єднує рядки та видаляє символ "z"
function combineAndRemoveZ(strings) {
  return strings.join('').replace(/z/g, '');
}

// Функція, яка перевіряє логін та пароль та повертає секретну фразу, якщо вони вірні
function checkLoginAndPassword(login, password) {
    // Масив з вірними парами логінів та паролів
    const validUsers = [
      { login: 'user1', password: 'pass1', secretPhrase: 'Secret phrase 1' },
      { login: 'user2', password: 'pass2', secretPhrase: 'Secret phrase 2' },
      { login: 'user3', password: 'pass3', secretPhrase: 'Secret phrase 3' },
    ];
  
    // Перевірка на відповідність введеного логіну та пароля зі списком вірних пар
    const user = validUsers.find(user => user.login === login && user.password === password);
  
    // Повертаємо секрет
    if (user) {
        return user.secretPhrase;
    } else {
        return 'Invalid login or password';
    }
}

module.exports = { combineAndRemoveZ, checkLoginAndPassword };
