# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Ackhowledgements](#Acknowledgements)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/rickMcGavin/fe-mentor-profile-card](https://github.com/rickMcGavin/fe-mentor-profile-card)
- Live Site URL: [https://fe-mentor-profile-card-phi.vercel.app/](https://fe-mentor-profile-card-phi.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Achieving the background was one of the most interesting parts of this project. I chose to place the two circles with absolute positioning, and I adjust the position on a with media queries. I tried other methods that didn't seem better than this approach. I think with some JavaScript, you could position the circles nicely while scaling, but that's a bit overkill, especially for this project.

The solution here was to set and position the SVGs with `background-image` and use `background-position` with `vw` and `vh` units. This made the circles "stick" to the edges of the viewport. You can see the acknowledgements section for where I came across this solution.

## Author

- Website - [Rick McGavin](https://rickmcgavin.github.io)
- Frontend Mentor - [@rickMcGavin](https://www.frontendmentor.io/profile/rickMcGavin)
- Twitter - [@rickMcGavin](https://www.twitter.com/rickMcGavin)

## Acknowledgements

I had been struggling with the body background pattern. I found a good solution on [@davidtrikic's](https://github.com/davidtrikic) github with his Frontend Mentor solution for the same challenge. Specifically this [CSS file](https://github.com/davidtrikic/frontendmentor-profilecard/blob/main/css/style.css#L24).
