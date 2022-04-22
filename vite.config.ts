import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/ch-react-site/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				error404: resolve(__dirname, '404.html')
			}
		}
	}
});
