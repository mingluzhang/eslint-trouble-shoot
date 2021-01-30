This is the repo for trouble shooting of ESLint.
In the workspace of 'Project', problems can be reproduced from this repo include,
- ESLint extension in VSCode can't cover the folder of /Core.
- When using webpack4 + eslint-loader, 
  - errors in files of /Core can't be detected. 
  - some folders such as /Project/Common/Models, /Project/DataLayer, /Project/FabricIcons and /Project/Globals are ignored implicitly.
- When using webpack4 + eslint-webpack-plugin, no error can be detected.