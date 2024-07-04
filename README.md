# How to start

the below for json-server setup:
Make Sure you have a nike.json file in the same directory as the folder in which this readme is.
You can get the data from here. Once you have the data, put all porducts objects in a array then name that arrya as "product":[] and then enclose the whole in a {} making it a single object
Next open your command prompt in the same directory and follow the below :
 1. npm i json-server
 2. json-server --watch nike.json

 This will start the server in localhost:3000 and you can access the data from makinf a GET request to localhost:3000/products


 Now open the react project and run npm run dev in the terminal to start the frontend. It will start on localhost:5173
 Go to this URL and see the site.


 # What it offers?

 you will see the list of products in the page.Try to Hover on a product card! Clikcing on the product gets to the products page. You can add it Bag or Favourites by buttons provided there. 

 To see the items in the bag and favourites, click on the icons on the right side of the navbar that redirects to the respective pages. You can also remove items from there.  

 adding a specific item to the bag, preserves the present colour and size. In bag, the total price is automatically calculated and chanegs dynamically

 The Checkout options and paypal options will be disabled until the user signs in

 in the main page, you can also filter out products based on your preferences and also search for any specific product in the search bar.
 


 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
