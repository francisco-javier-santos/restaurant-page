# restaurant-page

A simple restaurant page project that uses Webpack for bundling and development. It includes different sections such as Home, Menu, and About, with content dynamically rendered using JavaScript.

## Features

- A homepage with a welcome message.
- A Menu page displaying a sample menu.
- An About page with restaurant information.
- Dynamic content rendering via buttons for navigation (Home, Menu, About).

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [npm](https://www.npmjs.com/get-npm) (which comes with Node.js)

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/restaurant-page.git
   ```

2. Navigate into the project directory:

    ```bash
    cd restaurant-page
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

This command will install all dependencies listed in the package.json file.

# Usage
## Development Mode
To start the development server and view the project in your browser, run the following command:

    ```bash
    npm start
    ```
    
This will start the Webpack development server, automatically opening the project in your default web browser. The server will watch for changes in your source files (JavaScript, HTML, CSS) and automatically reload the page when changes are detected.

## Production Mode (Optional)
If you want to build the project for production (minified and optimized for deployment), run the following command:

    ```bash
    npm run build
    ```

This will create a dist/ folder containing the bundled and minified files, ready for deployment.

# Development Workflow
The project uses Webpack Dev Server, which provides Hot Module Replacement (HMR) for faster development. When you modify the source files (e.g., index.js, style.css, or template.html), the page will automatically reload with the updated content.

## Folder Structure
Here's an overview of the project folder structure:

src/: Source files (HTML, JS, CSS, SCSS, etc.)
index.js: The main entry point for JavaScript.
template.html: The HTML template for the base structure of the page.
style.css / style.scss: CSS/SCSS files for styling.
dist/: Compiled output files (created after running npm run build).
Contains the bundled JavaScript and the generated HTML file.
webpack.config.js: Configuration file for Webpack.
.gitignore: Specifies which files and directories Git should ignore (e.g., node_modules, dist).
