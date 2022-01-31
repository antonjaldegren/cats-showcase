# CATS | A showcase of cats

Welcome to this website which displays images of cats fetched from "The Cat API".

## Pre-requisites

Before you proceed to install, you need to have the following tools installed:

-   [Node](https://nodejs.org/en/)

## How to install

In order to install, you need to run:

```
npm install
```

## How to run project locally (on you computer)

To setup a local developement server, run:

```
npm start
```

To get the main functionality of the site to work properly, you will need to [get your own API key](https://thecatapi.com/signup) and create a `.env` file in the project root directory containing the following text:

```
SNOWPACK_PUBLIC_ENABLE_FEATURE=true
SNOWPACK_PUBLIC_API_KEY=<YOUR-API-KEY>
```

## How to build a production bundle

To build the website for production, run:

```
npm run build
```
