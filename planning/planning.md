# UShop.com

## Description

ECommerce App:
Where users can shop, add their items to the cart and make payments.
Users can log in and see their orders.
As an Admin, do full crud.

## Technologies used:
React | Bootstrap | Redux Store

# components folder
### Header:
    - Contains navbar, built with the help of bootstrap.
    - Navbar contains main shop link, cart and login links.
    - Responsive
### Footer:
    Copyright UShop
### Product:
    - Individual product info, through product id.
    - name, price, description about the product, start rating,, status, whether product is in stock or not.
    - depepnding upon product status, qty to be added, and add to cart button is shown.
    - disabled if product is not in stock.   
### Message and Loader 
    - for error message and loading animation
    - react bootstrap alert component is used

## screens
### Homescreen
    - Mapping of Product data main Homescreen
    - Ternary operator, if loaded, show products or otherwise, error message.
    - Trigger actions to make api calls
### ProductScreen
    - Individual product details are rendered with product id.
    - Add to cart option is there.
    Add to cart button has onChange event handler when user enters qty, it is compared to count in stock and map the quantity. 
    - Add to cart button redirecting us to Cart Screen with qty and product id.
### CartScreen
    - selected products from user are shown, their quantity is shown.
    - user can add quantity, remove items from this component.
    subtotal and quantity of total items is shown by using of reduce array method.
### Loginscreen
    - Bronz goal
    - authenticated users can enter their credential, email and password to get in.
    - Its not functional yet.
### ShippingScreen
    - Bronz goal, not completed yet
    - Users can enter their credentials and pay through PAYPAL.

# Redux store 
- installed redux extensions dev-tools
- State Management Library
### store.js
- reducer function, initial state  as object, apply middleware passed as parameters.
- passed all reducers in reducer 
- create store function 

### Reducers
#### productReducers.js
- combine cart, product and user reducers
- apply middleware
- product lists and product details
- update just the product part od state
#### userReducers.js
- user login, logout, request, success and login fail actions are made with switch statement
### Actions 
#### product/cart/ UserActions.js
- making API call from here
- once get the data, dispatch it to reducer where it update the state.
### Constants
- store reducers variables in there for easy availability, if we want to change, update them.