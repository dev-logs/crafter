import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
	  port: 8025,
		host: '0.0.0.0'
	},
	preview: {
	  port: 8025,
		host: '0.0.0.0'
	}
});
