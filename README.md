# TestSite
A basic startup site for Node.js and Gulp

# Installation
These installation instructions are assuming you already have Node.js installed. If you don't, then please visit https://nodejs.org/en/download/ to download and install Node.js. Doing so will also install `npm` which is used for package management with Node.js.

To install this website:

On Windows:
    1. Open `cmd.exe`
    2. Navigate to the folder to install project: `cd C:\Users\{username}\Documents\Projects` or wherever you want to install the project
    3. Clone the git repository: `git clone git@github.com:amlconsulting/TestSite.git`
    4. Navigate into cloned directory: `cd TestSite`
    5. Install package dependencies: `npm install`. This will install everything you need to use the application as is.
    6. Use Gulp to compile SASS and TypeScript, and create a buildable release. Just type `gulp`, and press enter. This will use BrowserSync to open your browser for site review. Using BrowserSync will allow you to make changes to your .scss, .ts, and .html files, and the browser will automatically update. To exit gulp and shut down the BrowserSync connection, type Ctrl+C to exit.
    7. To deploy to IIS:
        a. Open ISS and create a new site, and point the application directory to your projects `build/Release` folder. 
        b. Go back to your command prompt and type `gulp deploy-to-iis` and your site will be deployed to IIS.
        c. Open your browser and navigate to your site's URL (whatever you created it IIS) and the site should open up.    