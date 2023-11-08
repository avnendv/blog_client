export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.{scss,less,styl,html}': ['prettier --write'],
  '*.md': ['prettier --write'],
};
