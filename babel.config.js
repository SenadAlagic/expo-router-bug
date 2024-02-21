module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@/mock': './src/__mock__/index',
            '@/api': './src/api',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/context': './src/context',
            '@/hooks': './src/hooks',
            '@/i18n': './src/i18n/index',
            '@/models': './src/models',
            '@/types': './src/types',
            '@/services': './src/services',
            '@/storage': './src/storage/index',
            '@/validations': './src/validations',
            '@/styles': './src/styles',
            '@/utils': './src/utils',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
