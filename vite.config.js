import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from "vite-plugin-pages";
import { json } from 'express';

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react(), Pages()],
//})


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      //'process.env': env
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL),

    },
  plugins: [react(), Pages()],
  }
})