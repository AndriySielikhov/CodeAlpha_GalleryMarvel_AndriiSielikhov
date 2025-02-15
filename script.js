document.addEventListener('DOMContentLoaded', function() {
    const heroItems = document.querySelectorAll('.hero-item'); // Елементи списку героїв
    const heroes = document.querySelectorAll('.hero'); // Всі герої (контейнери)

    // Об'єкт для зображень кожного героя
    const heroImages = {
        hero1: document.querySelectorAll('.hero1-images'),
        hero2: document.querySelectorAll('.hero2-images'),
        hero3: document.querySelectorAll('.hero3-images'),
        hero4: document.querySelectorAll('.hero4-images')
    };

    // Функція для зміни зображень героя
    function showHeroImages(hero) {
        // Спочатку приховуємо всі зображення
        Object.keys(heroImages).forEach(heroKey => {
            heroImages[heroKey].forEach(img => img.classList.add('hidden'));
        });

        // Потім показуємо зображення для вибраного героя
        heroImages[hero].forEach(img => img.classList.remove('hidden'));
    }

    // Обробник для вибору героя
    heroItems.forEach(item => {
        item.addEventListener('click', function() {
            const heroId = item.getAttribute('data-hero'); // Визначаємо героя за атрибутом data-hero

            // Приховуємо всіх героїв
            heroes.forEach(hero => {
                hero.classList.add('hidden');
            });

            // Відображаємо відповідного героя
            const selectedHero = document.querySelector(`.${heroId}`);
            selectedHero.classList.remove('hidden');

            // Оновлюємо зображення для цього героя
            showHeroImages(heroId);
        });
    });
});

  

// Отримуємо усі кнопки на правій панелі
const heroItems = document.querySelectorAll('.hero-item');
const heroNameElement = document.getElementById('hero-name');
const heroNameUnderline = document.querySelector('.hero-name-underline');

// Отримуємо всі елементи з класом "hero-item" і додаємо подію
heroItems.forEach(item => {
  item.addEventListener('click', function() {
    // Видаляємо клас active з усіх кнопок і заголовків
    heroItems.forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.hero1, .hero2, .hero3, .hero4').forEach(hero => hero.classList.remove('active'));
    
    // Додаємо клас active для поточної кнопки
    item.classList.add('active');
    
    // Змінюємо назву і кольорову підсвітку на основі натиснутого героя
    const heroType = item.getAttribute('data-hero');
    heroNameElement.textContent = item.textContent;

    // Оновлюємо кольорову підсвітку
    document.querySelector(`.${heroType}`).classList.add('active');
  });
});


