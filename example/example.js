// Отримуємо елементи з класом 'item'
const items = document.getElementsByClassName('item');

// Зміна тексту другого пункту
if (items.length > 1) {
    items[1].textContent = 'Змінений пункт 2';
}

// Додавання обробника події для кнопки додавання пункту
document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.createElement('li');

    // Оновлюємо колекцію елементів після додавання нового
    const newItems = document.getElementsByClassName('item');
    console.log(newItems.length, "FLJKSNfKSNf"); // Виводимо кількість елементів після додавання нового

    // Додаємо новий пункт до списку
    newItem.textContent = `Новий пункт ${newItems.length + 1}`;
    newItem.className = 'item'; // Призначаємо клас 'item'
    document.getElementById('itemList').appendChild(newItem); // Додаємо новий елемент до списку
});
