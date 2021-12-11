import { defineConfig } from "vite";

export default defineConfig({
    /**
     * Uncomment the following to make minification work for `es` outputs.
     */
    // esbuild: {
    //     minify: true,
    // },
    build: {
        minify: true,
        lib: {
            name: 'lib',
            entry: 'src/index.ts',
            formats: ['es', 'cjs' ,'iife', 'umd'],
        }
    }
})