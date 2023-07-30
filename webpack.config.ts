import webpack from 'webpack';
import path from 'path';
import {buildWebpackConfig} from "./config/configModules"
import type {BuildPaths, BuildMode} from "./config/types/config"

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode: BuildMode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths: paths,
  isDev: isDev
});

export default config;