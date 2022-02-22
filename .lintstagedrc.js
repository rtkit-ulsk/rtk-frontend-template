module.exports = {
  '*.{ts,tsx}': files => [`npm run lint:ts --fix ${files.join(' ')}`, `git add ${files.join(' ')}`],
  '*.css': files => [`npm run lint:styles --fix ${files.join(' ')}`, `git add ${files.join(' ')}`],
};
