# Project using Vite
mkdir my-vite-react-app
cd my-vite-react-app
npm create vite@latest 'AppName'
npm i
npm list react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

@tailwind base;
@tailwind components;
@tailwind utilities;




# 1. Setup using React 18
- `npx create-react-app react-tutorial --use-npm`
- `cd react-tutorial`
- `npm install react@18 react-dom@18`
- `npm install web-vitals antd`
- `npm start`


- - -

# 2. Old Way of Project using Vite
mkdir my-vite-react-app
cd my-vite-react-app
npm create vite@latest . -- --template react
npm install
npm list react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev