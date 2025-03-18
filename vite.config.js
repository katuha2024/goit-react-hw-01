import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Локальні стилі за замовчуванням
      globalModulePaths: [/global\.css$/], // Глобальні стилі для файлів з ім'ям "global.css"
    },
  },
});
