![CF](http://i.imgur.com/7v5ASc8.png) Project
=================================================
<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
<!-- [PR]: http://xyz.com -->
<!-- travis build -->
<!-- [Travis]: https://www.travis-ci.com/YOUR_ORG_NAME/REPO_NAME -->
<!-- back-end -->
<!-- [3]: http://xyz.com -->
<!-- front-end -->
<!-- [4]: http://xyz.com -->
<!-- swagger -->
<!-- [5]: http://xyz.com -->
<!-- jsdoc-->
<!-- [jsdoc]: heroku-link/docs  -->
## Bitmap
### Author: Vanessa
### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
* [back-end][3]
<!-- (when applicable) -->
* [front-end][4]
#### Documentation
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
* [jsdoc][6]
### Modules
#### `modulename.js`
index.js

##### Exported Values and Methods
```{transform(file, operation) -> new transformed .bmp file}```
Passes in commands from the CLI to read a .bmp file and write a new, transformed .bmp file. Uses bitmap.js to construct a new instance, which in turn uses modules from the transforms/ folder to edit the bitmap files buffer and create a new file with that buffer.


##### transforms/

Each transform method is exported to bitmap.js to create a new file named <old-file-name>.<operation>.bmp in the transforms/ folder.

Exported Values and Methods (for each module)

###### headbond
###### injail
###### whitebrow


### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db
#### Running the app
* `npm start`
* Endpoint: `/`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made?
#### UML
Link to an image of the UML for your application and response to events
