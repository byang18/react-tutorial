# Interactive React Tutorial

The Interactive React Tutorial is designed to help programmers familiar with Javascript, CSS/HTML, and basic web development get started with React! The project aims to guide users to building a basic to-do app via an online IDE, with the app appearing directly in the browser.

Features include:
- Guided lessons focusing on topics in React
- Online IDE
- In-browser rendering of a basic React app
- Visualizations of Props and States associated with components

This app is built entirely in React. Potential future features are listed in the repo issues.

## Check it out here!

https://byang18.github.io/react-tutorial/

## Set Up

After pulling the repo in a local directory on your computer, head to the root directory of the project on the terminal and run:

```
yarn
yarn start
```

The local version of the project should be hosted on http://localhost:8080/

## Features

### Basic Functionality

The below gif shows basic functionality of the app, demonstrating use of the online IDE and the resulting app.

![Basic Functionality](/assets/basic_functionality.gif)

### Completed App

The below gif shows a completed app with complete code. This renders the full, fully functional app, as well as a view of all props and initial state of the app.

![Completed App](/assets/completed_app.gif)

## Term Summary and What was Learned

### 3/12/19

I had a great time creating a helpful web app. The functionality mostly works and is smooth, and the technology, at its core, is the same type of technology that powers companies such as Leetcode and InterviewCake. The visualization feature especially is not easily found on the internet, but would be extremely helpful for new users who cannot wrap their heads upon React concepts such as props and state.

Technically, a lot of the challenges were wrapped around the "Visualization" feature, which involved sneakily recording the props and states of components upon render. Thus, this work could be seen as analogous to coursework in an advanced front-end web development course, by focusing on advanced React concepts like higher order components, refs, etc. I also solidified my understanding of build scripts, tools such as Babel, and lifecycle methods, as well as strengthened my Javascript skills. I wish I got to play around more with other front-end technologies such as Redux or build a backend, but I am glad I got to focus a lot of time on React.

I wish I had more time to implement more features, such as a better working state (right now, state of class-based components only update upon mounting, not on update, which may be confusing to beginning users.) as well as generalizable components. I would also like to implement saved user information (such as the code they are currently at, login info, progress preservation upon refresh--which would include a backend etc). But, I am happy at the current state of progress, and these features could be implemented later as a side project. If there is more time, I would also like to implement lessons and support for teaching features such as lifecycle methods, React Router, and React (more along the lines of Dartmouth's CS 52 course).

Additionally, a lot of the functionality is currently buggy (especially solutions involving Regex and user code, which cannot account for every or even most edge cases). So I would like to clean up that code and make it more scalable in the future. This issue, among others, are outlined in the repo's issues tag.

Next Steps:
- Working on the state updating incorrectly in the visualization
- Generalizable components
- Finishing up the basic lesson plan so that a version 1 would make sense
- Create a backend to store user info, where they left off, as well as their code.
