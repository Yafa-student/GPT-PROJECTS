import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [react(), basicSsl()],
    server: {
        port: 60047,
        https: true,
        proxy: {
            '/api': {
                target: 'https://localhost:7250',
                secure: false,
                changeOrigin: true
            }
        }
    }
})