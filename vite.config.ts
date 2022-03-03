import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';


const projectRootDir = path.resolve(__dirname);
const srcFiles = fs.readdirSync(path.join(projectRootDir, 'src'));
const srcFolders = srcFiles.filter((fileName) => {
  const fileStat = fs.statSync(path.join(projectRootDir, 'src', fileName));
  return fileStat.isDirectory();
})

const alias = srcFolders.reduce((acc, folderName) => {
  acc[folderName] = path.join(projectRootDir, 'src', folderName)
  return acc;
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [react()]
})
