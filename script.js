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

    welcomeScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    galleryContent.style.display = 'none';
    contactsContent.style.display = 'none';

    const galleries = [
        {
            id: 'gallery1',
            images: [
                './images/hero1/hero1-1.jpg',
                './images/hero1/hero1-2.jpg',
                './images/hero1/hero1-3.jpg',
                './images/hero1/hero1-4.jpg',
                './images/hero1/hero1-5.jpg',
                './images/hero1/hero1-6.jpg'
            ]
        },
        {
            id: 'gallery2',
            images: [
                './images/hero2/hero2-1.jpg',
                './images/hero2/hero2-2.jpg',
                './images/hero2/hero2-3.jpg',
                './images/hero2/hero2-4.jpg',
                './images/hero2/hero2-5.jpg',
                './images/hero2/hero2-6.jpg'
            ]
        },
        {
            id: 'gallery3',
            images: [
                './images/hero3/hero3-1.jpg',
                './images/hero3/hero3-2.jpg',
                './images/hero3/hero3-3.jpg',
                './images/hero3/hero3-4.jpg',
                './images/hero3/hero3-5.jpg',
                './images/hero3/hero3-6.jpg'
            ]
        },
        {
            id: 'gallery4',
            images: [
                './images/hero4/hero4-1.jpg',
                './images/hero4/hero4-2.jpg',
                './images/hero4/hero4-3.jpg',
                './images/hero4/hero4-4.jpg',
                './images/hero4/hero4-5.jpg',
                './images/hero4/hero4-6.jpg'
            ]
        }
    ];





    // Функція для переходу до main content (герої)
    function showMainContent() {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        galleryContent.style.display = 'none';
        contactsContent.style.display = 'none';
    }

    function showWelcomeScreen() {
        welcomeScreen.style.display = 'flex';
        mainContent.style.display = 'none';
        galleryContent.style.display = 'none';
        contactsContent.style.display = 'none';
    }

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

    
    
    galleries.forEach(gallery => {
        const boxes = document.querySelectorAll(`#${gallery.id} .box`);
        let currentIndex = 0;
    
        boxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                currentIndex = index;
                openFullscreen(gallery.images[currentIndex], gallery.images);
            });
        });
    });
    
    function openFullscreen(imageUrl, images) {
        const fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.id = 'fullscreen-overlay';
        fullscreenOverlay.innerHTML = `
            <div id="fullscreen-container">
                <img src="${imageUrl}" alt="Fullscreen Image">
                <button id="prev-button">‹</button>
                <button id="next-button">›</button>
                <button id="close-button">×</button>
            </div>
        `;
        document.body.appendChild(fullscreenOverlay);
    
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const closeButton = document.getElementById('close-button');
        const fullscreenImage = document.querySelector('#fullscreen-container img');
    
        let currentIndex = images.indexOf(imageUrl);
    
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            fullscreenImage.src = images[currentIndex];
        });
    
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            fullscreenImage.src = images[currentIndex];
        });
    
        closeButton.addEventListener('click', () => {
            document.body.removeChild(fullscreenOverlay);
        });
    }

});
