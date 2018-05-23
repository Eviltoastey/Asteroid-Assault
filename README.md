#  ![](https://raw.githubusercontent.com/ArnovanDoesburg/CMTPRG01-8/feature/Collision/dist/img/meteor/tiny2.png) Meteor Marathon ![](https://raw.githubusercontent.com/ArnovanDoesburg/CMTPRG01-8/feature/Collision/dist/img/meteor/tiny1.png)

This project was made on behalf of the Rotterdam University of Applied Sciences.

## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project the TypeScriptCompiler is required.

```
npm install -g typescript
```

You'll also require BrowserSync for live reloading.

```
npm install -g browser-sync
```

### Installing

To get the project up and running be sure to watch local files for changes by executing the build command, this can be done by pressing ⌘CMD+⇧SHIFT+B.

Next up we'll want our project to be reloaded everytime the built javascript is changed, this can be done by executing the following command.

```
browser-sync start --server --files "js/main.js"
```

Make sure to execute this command in the /dist directory and not the root folder.

## Pull request

With this pull request I added a new feature branch to a tower defense game which made it possible to restock the towers with bullets by purchasing ammo with gold.

I also added the ability to generate more gold by killing zombies.

[Link](https://github.com/Tim0182/CMTPRG01-8/pull/2)


## Peer review

Coming soon™

## Authors

* **Arno van Doesburg** - *development*
* **Kenney.nl** - *graphics*
