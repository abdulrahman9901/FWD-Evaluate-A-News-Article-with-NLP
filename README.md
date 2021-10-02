[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Evaluate A News Article with Natural Language Processing
## Description
 The project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral , the user will be able to attach a link to article he want process and our web tool will give him/her back feedback about the article, the tools uses external api to do the NLP work i'm using sentiment Analysis - which analyzes texts and detects their polarity, subjectivity, irony and emotional agreement - from [MeaningCloud API ](https://www.meaningcloud.com/) 


## Installation
First check whether you have node and npm on your device or not by writting following commands in the command line
```
node -v 
npm -v 
```
Then if you don't have them on your pc follow the followung [link](https://nodejs.org/en/download/) 

Then in the project directory install the dependencies by writting in the cmd
```
npm i 
```
## Usage
To start the app you have to write on the command line
```
npm run build-prod
```
the dist folder will appear in the project directory 
then write the command
```
npm run start
```
that will start the app at port 8081
so you can access the tool from the Url : http://localhost:8081
