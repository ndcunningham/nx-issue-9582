# AcmeInc

This repository is contains a React application built using Webpack that imports a React library which should be bundled with the application.

## Purpose

This repository is a minimal reproduction of an issue with Nx and Webpack. The application is a simple React app that imports a library from the `libs` directory. The 
library is a simple React component that displays a message.

The purpose is to illustrate an issue with Nx while using Weback where the library types are not being correctly recomplied after being changed.