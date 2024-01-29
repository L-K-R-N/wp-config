import webpack from 'webpack'
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const {mode, paths} = options

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
          },
          resolve: buildResolvers(options),
          devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
          devServer: isDev ? buildDevServer(options) : undefined
      }
}