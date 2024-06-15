import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: [
				"favicon.ico",
				"favicon-16x16.png",
				"favicon-32x32.png",
				"apple-touch-icon.png",
				"vite.svg",
			],
			manifest: {
				name: "My PWA App",
				short_name: "PWA",
				description: "My Awesome App description",
				theme_color: "#FFFFFF",
				icons: [
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/pwa-maskable-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/pwa-maskable-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
				start_url: "/",
				display: "standalone",
				background_color: "#FFFFFF",
			},
		}),
	],
});
