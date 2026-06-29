# Macbook Landing

Промо-лендинг MacBook Pro с интерактивной 3D-моделью и scroll-анимациями. Построено на React, Three.js и GSAP.

🔗 **Демо:** https://jazzy-moonbeam-07cf71.netlify.app

![Превью приложения](./preview.jpg)

## Возможности

- Интерактивная 3D-модель MacBook со сменой размера (14″ / 16″) и цвета
- Вращение 3D-модели по скроллу и смена видео-текстуры экрана
- Hero-секция с автоплей-видео
- Секция Showcase с фоновым видео и маской-логотипом
- Секция Performance с параллакс-анимацией изображений
- Секция преимуществ с появлением блоков
- Scroll-анимации на GSAP ScrollTrigger (pin, scrub, stagger)
- Шапка и подвал в стиле Apple
- Адаптивная вёрстка

## Стек

- React 19 + TypeScript + Vite
- Three.js + @react-three/fiber + @react-three/drei
- GSAP + @gsap/react (ScrollTrigger)
- Zustand (состояние 3D-модели)
- react-responsive
- SCSS (Sass)
- React Compiler (babel-plugin-react-compiler)
- ESLint / Stylelint / Prettier + Husky + lint-staged

## Запуск

Требуется Node.js 20+.

Из-за конфликта peer-зависимостей (React 19 и часть 3D-библиотек) в проекте включён `legacy-peer-deps` через `.npmrc`, поэтому установка делается обычным `npm install`.

```bash
# установка зависимостей
npm install

# режим разработки (http://localhost:5173)
npm run dev

# продакшн-сборка
npm run build

# предпросмотр сборки
npm run preview
```

## Скрипты

| Команда           | Описание                            |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Запуск дев-сервера Vite             |
| `npm run build`   | Проверка типов и сборка в `dist/`   |
| `npm run preview` | Локальный предпросмотр сборки       |
| `npm run lint`    | Прогон ESLint, Stylelint и Prettier |
| `npm run format`  | Форматирование кода Prettier        |

## Структура

```
public/            3D-модели (glb), видео, изображения, шрифты, иконки
src/
├── components/    секции и UI (AppHeader, HomeHero, ProductViewer, …)
│   ├── models/    React-обёртки 3D-моделей MacBook
│   └── three/     элементы 3D-сцены (StudioLights, ModelSwitcher)
├── constants/     данные: навигация, фичи, позиции изображений
├── store/         zustand-стор состояния модели (цвет, размер, текстура)
├── assets/scss/   стили (SCSS)
└── App.tsx        композиция секций
```

## Контент

Чтобы наполнить лендинг своими данными, отредактируйте `src/constants/index.ts` (навигация, фичи, позиции изображений) и замените модели, видео и изображения в `public/`.
