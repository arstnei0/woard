import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        AutoImport({
            include: [
                /\.[tj]sx?$/,
            ],
            imports: ['react', 'react-router-dom'],
            eslintrc: {
                enabled: true,
            },
        }),
        react()
    ]
})