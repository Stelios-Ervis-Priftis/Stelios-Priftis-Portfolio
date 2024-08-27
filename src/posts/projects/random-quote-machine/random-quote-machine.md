---
title: 'Quote Machine'
sortBio: 'Generate a random quote!'
img: 'random-quote-machine.png'
cssClass: 'quoteMachine'
date: '13-5-2021'
Refactored: '27-8-2024'
notPublished: false
---

### Description

The Random Quote Machine is a simple quote generator application. It fetches quotes from an external API and displays a random quote every time you click the “New Quote” button. Each time a new quote is generated, the background color changes dynamically, providing a fresh look with each interaction.

This project was initially created to practice React skills and fulfill the requirements for the Front End Libraries Projects certification, **Build a Random Quote Machine** by [FreeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/#front-end-libraries-projects) on **FreeCodeCamp**. Recently was refactored using Next.js to improve performance and resolve issues related to CORS and API availability.

Visit the website, [Click here](https://random-quote-machine-next.vercel.app/).

### Side note

The Quote Machine Generator underwent a full refactor to address CORS issues and the discontinuation of the original API. The refactored version now leverages Next.js, utilizing server-side API routes to mimic a proxy server. This setup allows the application to fetch data server-side from external APIs and serve it to the client, effectively bypassing CORS restrictions.

### Used Technologies

_NextJs - React - CSS Modules - Axios - NPM_
