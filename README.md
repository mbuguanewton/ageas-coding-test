# AGEAS CODING TASK

## Scenario

A client has a simple database, which contains a list of users along with some personal data and their current activity status.
They want a simple display for a restricted area of their website, which will only show their members who are over the age of 18 along with their current status.
They would like to be able to change the order of the list alphabetically by first name and filter out users according to their status.

## Task

Using the design and user data provided below, build a web page which meets the client’s requirements.
Please leave the JSON data unedited as part of your final solution but you’re welcome to convert the file to a .json file type.
Please complete this task using Github showing your development activity.
You are welcome to use any other resources you wish to complete the task.
When you’re finished, please send us a link to your Github repository.

## Supporting files

[Design](https://xd.adobe.com/view/174fccd2-2e47-4bb3-a51b-d200f24a2d30-421c/)
User data - userlist.txt (file included)

# Flow of activities

---

I used Reactjs and SCSS to complete the task and below is the folder structure.

```bash
Project
|__ app
    |   public
        |   data
            |   userlist.json
    |   node_modules
    |__ src
        |   components
        |   pages
        |   methods
        |   index.scss
        |   main.jsx
    |   index.html
    |   package.json
    |   package-lock.json
    |   vite.config.js
|__ scripts
    |   git.sh
|__ .gitignore
|__ README.md
```

To generate the react app and set it up i used a tool called [Vitejs](https://vitejs.dev).

My approach for the task is to build the UI first and then add the functionality afterwards.

The good thing about react is the component bases structure

```bash
-----------------------------------------------------------------------------
|                               App Page                                    |
|   ---------------------------------------------------------------------   |
|   |                 container component (App.jsx)                     |   |
|   |   ------------------------------------------------------------    |   |
|   |   |              Actions section (Actions.jsx)               |    |   |
|   |   |   ----------------------------------------------------   |    |   |
|   |   |   |        UserList component (userlist.jsx)          |  |    |   |
|   |   |   |   ----------------------------------------------  |  |    |   |
|   |   |   |   |   UserListItem component (userlistitem.jsx)   |  |    |   |
|   |   |   |   ----------------------------------------------  |  |    |   |
|   |   |   -----------------------------------------------------  |    |   |
|   |   ------------------------------------------------------------    |   |
|   ---------------------------------------------------------------------   |
-----------------------------------------------------------------------------
```

I broke down the UI into the above components and created each component as i added the functionality for each

So for the App page that's where the data is fetched and curated to get the users above the ages of 18 then we pass it down as props to the userlist. The app page also contains states for the order of which the users appears the default is A-Z, as well as the status they will be filtered with.

I passed down the order and status states along with the functions to change the states into the actions component where the states are changed.

If the order state is changed the data will be sorted accordingly immediately the state is changed. The same goes for the status.

For the filtering by status functionality, this happens in the userlist where we filter the users list everytime the status changes and pass the new values to a new array state called filtered which is the state we use to show our list.

For ordering the list I have a function that orders based on the order passed so i reused that function to order the filtered array in the userlist.

## How to run the application

Open the project folder through the terminal on linux/mac or cmd/powershell on windows and clone the project from github

```bash
git clone https://github.com/mbuguanewton/ageas-code-test
```

```bash
cd ageas-code-test
```

Go into the app folder located inside the project folder

```bash
cd app
```

Make sure you have [Nodejs](https://nodejs.org) installed on your machine.

Run the command below to install any dependacies we shall use.

```bash
npm install
```

After installing the dependacies we can now run our project using the command below

```bash
npm run dev
```

This will run our project on http://localhost:3000/ which you will go to on the browser.

### Dependacies installed

The only dependacies need for the project to run are;

- React
- ReactDOM
- sass - to load our .scss files

### Scripts folder
This folder contains a git scripts that enables me to run some commands on the terminal to push code to github.

```bash
# for an initial push to github
./scripts/git.sh initial
```

```bash
# for any other push 
./scripts/git.sh push
```

> Happy coding !!
