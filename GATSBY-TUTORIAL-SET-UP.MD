# THE GREAT GATSBY BOOTCAMP

## Install Gatsby-cli on machine globally (Need of NodeJs for that).

	npm install -g gatsby-cli 
	
or 

	npm install -g gatsby-cli@version (@1.1.1) 

for a specific version.
	
## Generate a new Gatsby Project.

for a default start	
	
	gatsby new {your-project-name} 

or 

	gatsby new {your-project-name} {link-to-starter} 
	
for a custom template that you can find here: [https://www.gatsbyjs.com/starters/?v=2](https://www.gatsbyjs.com/starters/?v=2)

> Don’t run the above command as-is — remember to replace {your-project-name} and {link-to-starter}!

Example

	gatsby new my-gatsby-project https://github.com/gatsbyjs/gatsby-starter-hello-world
	
## Open Gatsby Project on Code Editor

On the root of the folder that you created with `gatsby new` run

#### Terminal command:

	code . 
	
## Run Gatsby App or Build or Clean. Terminal executions.

	npm run develop (Run app on Dev mode)
	npm run build (Build app for Production)
	npm run start (Run app on Production)
	npm run clean (Cleans the App)
	
## Visit the site

Server is start running on: [http://localhost:8000/]()

# Focus on src and pages directory

## Working with Gatsby pages

On pages directory will live all are static pages. by default index.js is are root first page that's shown in the browser

	/pages
		index.js


Import react interms to use JSX.
	
	import React from "react"
	
Create  a stand alone varieble fuctional component.

	// JSX
	const Index_Page = () => (
	  <div>
	    <h1>Hello I'm Stelios</h1>
	  </div>
	)

Export your component.

	export default Index_Page

### Challenge:

Create  3 new pages: (about, contact, blog) and export them.

	/pages
		about.js
		contact.js
		blog.js

When you finish visit the: [http://localhost:8000/]() and after the `/` type one of  are new pages that we created.

## Linking between pages with Gatsby

Importing a name export from the Gatsby npm module that already been installed when we create the are project.

On the pages directory in the `index.js` import:
	
	import React from "react"
	** import { Link } from "gatsby" **
	
	const Index_Page = () => (
	  <div>
	    <h1>Hello I'm Stelios</h1>
	    
	    ** <p>
	    		// Perfeclty fine for Github links etc with <a> tag
	      Need a Developer? <a href="/contact">Contact me.</a>
	    </p>
	    <p>
	    		// Corrent way linking between pages with <Link>
	      Need a Developer? <Link to="/contact">Contact me.</Link>
	    </p> **
	    
	  </div>
	)
	
	export default Index_Page
	
## Creating shared page components

On `/src` directory create a new directory called `/components`. There we will be create all the reusable **components** like header and footer that later on will be imported on are `/pages` files on where we need them.

On `/components` directory create your first **component** file `footer.js` and add:

	import React from "react"
	
	const Footer = () => (
	  <div>
	    <footer>
	      <p>Create by Stelios Ervis Priftis ©2021</p>
	    </footer>
	  </div>
	)
	
	export default Footer
	
Now we need to import are **component** to the **pages** that we need them.

Example: On are `/pages` directory lets import are components on **index.js**

	import React from "react"
	import { Link } from "gatsby"
	
	** // Components Import
	import Footer from "../components/footer" **
	
	const Index_Page = () => (
	  <div>
	    <h1>Hello I'm Stelios</h1>
	    <p>
	      Need a Developer? <a href="/contact">Contact me.</a>
	    </p>
	    <p>
	      Need a Developer? <Link to="/contact">Contact me.</Link>
	    </p>
	
	    ** <Footer /> **
	  </div>
	)
	
	export default Index_Page

There you have it! Are **footer** **component** has been rendered in are **index** page.

> Note that you can import Footer component wherever you needed.

### Challenge

On `/components` directory create a `header.js` shared Nav link **component** and import it on the `/pages` files same way as we did with `footer.js`

### Solution

On **header.js** add this:

	import React from "react"
	import { Link } from "gatsby"
	
	const Header = () => {
	  return (
	    <div>
	      <h1>Stelios Ervis Priftis</h1>
	
	      <ul>
	        <li>
	          <Link to="/">Home</Link>
	        </li>
	        <li>
	          <Link to="/about">About</Link>
	        </li>
	        <li>
	          <Link to="/blog">Blog</Link>
	        </li>
	        <li>
	          <Link to="/contact">Contact</Link>
	        </li>
	      </ul>
	    </div>
	  )
	}

	export default Header


On `index.js` and the rest of are `/pages` files add this:

	import Header from "../components/header"
	
and inside are JSX this:

	<Header />
	
## Creating Gatsby page layout

In this lesson, you will be taking your pages to the next level by **creating** a **single page layout component**.
So you can think of this video as a continuation of the last one, in the last video we set up our **header** and **footer** **component** and in order to **render** them on **every page** we had to **import** them on **every page** and then **manually** set them up in the **correct position**, **four times**. 
Now that was **four times for four pages**, as are **pages grow and are layout shifts** that are gonna **require** as to make **even more changes** to every **single page component**. 
What we gonna do here it set up a **universal layout component** that we can **easily** use to **create** a new **page** with just a **couple of lines of code**. 
So let's see how this is gonna look like and how its gonna help as.

To start let's create a new component in the components directory, and this is something we gonna call `layout.js` and eventually, this will be the only component that are pages need to import in order to get up and running.

	/components
		layouts.js
		
Now we gonna focus on `layout.js` and `index.js`, if we can get the layout to work here it will be really easy to add it to the other three pages. So to start let's create the basic structure of the layout component. 

### Basic structure layout component 

	/components
		layouts.js
		
	import React from "react"
	
	// Components Import
	import Header from "./header"
	import Footer from "./footer"
	
	const Layout = props => (
	  <div>
	    <Header />
	    {props.children}
	    <Footer />
	  </div>
	)
	
	export default Layout
	
Use of layout on `index.js`

	/pages
		index.js
	
	import React from "react"
	import { Link } from "gatsby"
	
	// Component Import
	import Layout from "../components/layout"
	
	const Index_Page = () => (
	  <Layout>
	    <h1>Hello I'm Stelios</h1>
	    <p>
	      Need a Developer? <a href="/contact">Contact me.</a>
	    </p>
	    <p>
	      Need a Developer? <Link to="/contact">Contact me.</Link>
	    </p>
	  </Layout>
	)
	
	export default Index_Pa ge

