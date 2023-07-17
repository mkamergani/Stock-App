module.exports = {
  trailingComma: 'es5',
  endOfLine: 'auto',
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}
