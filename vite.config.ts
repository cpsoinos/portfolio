import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
	plugins: [sveltekit(), webfontDownload()]
});
