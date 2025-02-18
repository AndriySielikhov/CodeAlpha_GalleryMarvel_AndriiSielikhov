document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.getElementById('continue-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const galleryContent = document.getElementById('gallery-content');
    const contactsContent = document.getElementById('contacts-content');

    const homeLink = document.querySelector('nav a[data-section="home"]');
    const heroesLink = document.querySelector('nav a[data-section="heroes"]');
    const galleryLink = document.querySelector('nav a[data-section="gallery"]');
    const contactsLink = document.querySelector('nav a[data-section="contacts"]');

    // Функція для переходу до main content (герої)
    function showMainContent() {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        galleryContent.style.display = 'none';
        contactsContent.style.display = 'none';
    }

    // Функція для повернення на welcome screen
    function showWelcomeScreen() {
        welcomeScreen.style.display = 'flex';
        mainContent.style.display = 'none';
        galleryContent.style.display = 'none';
        contactsContent.style.display = 'none';
    }

    // Функція для показу галереї
    function showGallery() {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'none';
        galleryContent.style.display = 'block';
        contactsContent.style.display = 'none';
    }

    // Функція для показу контактів
    function showContacts() {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'none';
        galleryContent.style.display = 'none';
        contactsContent.style.display = 'block';
    }

    // Перехід з welcome screen до main content
    continueButton.addEventListener('click', showMainContent);

    // Перехід до героїв через хедер
    heroesLink.addEventListener('click', function (event) {
        event.preventDefault();
        showMainContent();
    });

    // Перехід на welcome screen через "Home"
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        showWelcomeScreen();
    });

    // Перехід до галереї
    galleryLink.addEventListener('click', function (event) {
        event.preventDefault();
        showGallery();
    });

    // Перехід до контактів
    contactsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showContacts();
    });

    // Заміна двох обробників на один
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Відміняємо перехід за посиланням

            const sectionName = this.getAttribute('data-section');

            // Ховаємо всі секції
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'none';
            galleryContent.style.display = 'none';
            contactsContent.style.display = 'none';

            // Показуємо вибрану секцію
            if (sectionName === 'home') {
                showWelcomeScreen();
            } else if (sectionName === 'heroes') {
                showMainContent();
            } else if (sectionName === 'gallery') {
                showGallery();
            } else if (sectionName === 'contacts') {
                showContacts();
            }
        });
    });

    // Перша частина - герої
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
        Object.keys(heroImages).forEach(heroKey => {
            heroImages[heroKey].forEach(img => img.classList.add('hidden'));
        });

        // Покажемо зображення для вибраного героя
        if (heroImages[hero]) {
            heroImages[hero].forEach(img => img.classList.remove('hidden'));
        }
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

    // Додаємо другий блок: активізація героїв при натисканні на кнопки
    const heroNameElement = document.getElementById('hero-name');
    const heroNameUnderline = document.querySelector('.hero-name-underline');

    // Отримуємо усі кнопки на правій панелі
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


    function resetForm() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

});
