# CryptoTrack Project

## Архітектура проєкту

### Front-End (React + TypeScript):
- Використовуємо React з TypeScript для створення інтерфейсу користувача;
- Інструменти для управління станом: Redux Toolkit;
- Components:
    - Portfolio Dashboard;
    - Деталізація активу (графіки, історія цін);
    - Форми для додавання/редагування активів.
    -

### Back-End (NestJS):
- API для обробки запитів: створення/оновлення/видалення даних портфеля;
- Інтеграція з криптовалютними API (CoinGecko, CoinMarketCap, Binance API);
- Робота з базою даних (PostgreSQL або MongoDB);
- Впровадження безпеки (JWT для авторизації, валідація даних).

### Database:
- Зберігання даних про користувачів, їхні портфелі, транзакції та історію;
- Таблиці:
    - users (дані про користувача).
    - portfolios (основна структура портфеля).
    - transactions (транзакції купівлі/продажу активів).

## Мінімально життєздатний продукт (MVP)
### Функціонал

#### Авторизація та реєстрація:
- Вхід через email/password з використанням JWT.
- Реєстрація нового користувача.

#### Дашборд портфеля:
- Відображення поточних активів і загальної вартості портфеля.
- Розрахунок змін у вартості портфеля (загальна зміна, прибуток/збиток).

#### Додавання активів:
- Форма для введення активу (назва, кількість, ціна купівлі).
- Автоматичне отримання поточної ринкової ціни через API.

#### Оновлення даних активів:
- Виведення історії змін вартості активу (графіки).

#### Інтеграція API для даних:
- Використання CoinGecko API або Binance API для отримання актуальних даних.

## Технічний стек
### Front-End
- React: для побудови UI.
- React Query;
- TypeScript: для типізації компонентів.
- Axios: для запитів до API.
- Chart.js або Recharts: для побудови графіків.
- Styled Components;

### Back-End
- NestJS: модульна структура для побудови API.
- Prisma: для роботи з базою даних.
- Axios: для інтеграції з API сторонніх сервісів.
- JWT: для аутентифікації.
- Class-validator: для валідації вхідних даних.

### Database
- PostgreSQL: оптимальний вибір для реляційних даних.

## Етапи реалізації
### Етап 1: Налаштування проєкту
- Ініціалізуйте фронтенд і бекенд.
- Налаштуйте середовище для роботи:
    - Встановіть ESLint, Prettier для підтримки чистоти коду.
    - Створіть базову структуру проекту.

### Етап 2: Реалізація основних функцій
- Front-End:
    - Створіть базовий UI (авторизація, дашборд).
    - Реалізуйте сторінку додавання активів.

- Back-End:
    - Налаштуйте модуль авторизації (JWT).
    - Додайте CRUD-операції для активів.

### Етап 3: Інтеграція API
- Додайте обробку даних з CoinGecko або Binance.
- Виведіть актуальні дані на дашборд.

### Етап 4: Додаткові функції
- Сповіщення про зміну цін (WebSocket).
- Графіки з історією змін вартості активів.
- Оптимізація продуктивності.