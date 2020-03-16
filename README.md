[![Netlify Status](https://api.netlify.com/api/v1/badges/6b28773a-81a7-489e-b11b-1c8d115c5d81/deploy-status)](https://app.netlify.com/sites/kbn-website-2020/deploys)

# Website kebabnation.mx
Template version 3.3.0


# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```


# Folder Structure

```
/packages
	/common [All common components and resource]
		/Assets
		/components
		/contexts
		/data
		/theme
	/functions
	/landing [NextJs version of the project]
	/landing-gatsby [Gatsby version of the project]
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Gatsby Js
5. Styled System and Styled Components
6. Firebase Deployment.

# Development

## GatsbyJs

If you want to develop only for gatsbyjs then then you don't need the `/landing` folder which contains only nextjs related code. You can delete `/landing` folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing-gatsby/src/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing-gatsby/src/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `404.js`. That mean in your `/pages` folder you will have two files `index.js` and `404.js`
2. From `/landing-gatsby/src/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

Now if you start your `gatsbyjs` server with `yarn gatsby-dev` then you will get your server running on `localhost:8000`


# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build


