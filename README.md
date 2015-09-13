# dm-install

## Description
* A tool to install the different things a javascript-developer needs :-)

## Run
```
dmi [yml]
dm-install [yml]
```

## Install

```
npm install dm-install -g
```

## Tasks

### [phpComposer](tasks/phpComposer/index.js)
* install php composer

#### phpComposer global usage
```
dmi [phpComposer|phpc]
```

#### phpComposer programmatically usage
```javascript
var phpComposer = require("dm-install").phpComposer;
var phpComposerResult = phpComposer.start();
```

#### phpComposer steps

#### phpComposer features

#### phpComposer config
```javascript
{
    "phpComposer": {
    }
}
```

### [php](tasks/php/index.js)
* install php

#### php global usage
```
dmi [php]
```

#### php programmatically usage
```javascript
var php = require("dm-install").php;
var phpResult = php.start();
```

#### php steps

#### php features

#### php config
```javascript
{
    "php": {
    }
}
```

### [docker](tasks/docker/index.js)
* install docker

#### docker global usage
```
dmi [docker|docker]
```

#### docker programmatically usage
```javascript
var docker = require("dm-install").docker;
var dockerResult = docker.start();
```

#### docker steps

#### docker features

#### docker config
```javascript
{
    "docker": {
    }
}
```

### [typo3](tasks/typo3/index.js)
* install all requirements for typo3 (docker, docker-compose, make, composer)

#### typo3 global usage
```
dmi [typo3|t3]
```

#### typo3 programmatically usage
```javascript
var typo3 = require("dm-install").typo3;
var typo3Result = typo3.start();
```

#### typo3 steps

#### typo3 features

#### typo3 config
```javascript
{
    "typo3": {
    }
}
```

### installMarkdown
* http://unix.stackexchange.com/questions/4140/markdown-viewer
* install markdown viewer
* examples 
```javascript
alias installMarkdown // 
```

## Config
* you can place a .dm-install.json file in your home directory (~/.dm-install.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
