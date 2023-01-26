# ts-clientside
To see this sample running go to: 
https://sw2go.github.io/ts-clientside/wwwroot/

To use this sample for developping open a commandline terminal:
```
git clone git@github.com:sw2go/ts-clientside.git
cd ts-clientside
npm i
npm run build
```

VS Code
- Make sure 'Live Server Extension' is installed and configured to Port 4200 and "/wwwroot"
- File > Open Folder...  "ts-clientside"
- Hit 'Go Live' in status bar to run Live Server 
- The application is shown here: http://localhost:4200
- Enjoy IntelliSense
- Any change in ./src is immediately displayed in the browser
- To Debug hit F5

Hints: 
- Read comments in webpack.config.js to understand how to
  - copy assets with loader type 'asset/resource' and the CopyPlugin
  - inject typescript-chunks to different html files
- To build a file it must be referenced in a *.ts file (i.e. *.css)
- When moving the output-folder wwwroot adjust webpack.config.js and .vscode/settings.json