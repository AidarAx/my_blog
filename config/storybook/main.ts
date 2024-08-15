import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    if (config.plugins) {
      config.plugins.push(
        new DefinePlugin({
          __IS_DEV__: JSON.stringify(true),
          __API__: JSON.stringify(''),
          __PROJECT__: JSON.stringify('storybook')
        })
      )
    }

    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins ?? []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions
        })
      ]
    }

    config.module!.rules!.push(buildCssLoader(true))

    const fileLoaderRule = config.module!.rules!.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as Record<string, any>

    fileLoaderRule.exclude = /\.svg$/

    config.module!.rules!.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    })

    return config
  }
}
export default config
