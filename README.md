# React Shopping Cart

## What I learned

- Managing state across a more involved application, for me this was where the Context API really came into its own. There were many situations where it would have been difficult to provide the required state to the necessary components without excessively lifting state up higher. In this case I ended up using multiple context providers for the different aspects of my application.

- Client side routing using React Router DOM. I had some custom Routes set up for client side navigation which I stored in my main App file and then referred to these routes in my navbar component.

- This was my first time writing some tests using the React Testing Library, I ended up using vitest as my testing framework as I had lots of uses trying to use jest with vite. 


## How I could improve moving forward

- I like the idea of using my Context providers in tandum with something like a useReducer hook for the state. I have heard that this is often used in projects that are more complex but its definitely something I'd like to try myself.

- I may go back at some point and implement some custom routing for products by their id, as its something I haven't done before.

- How to plan for tests better when working with React: I found that a test first approach wasn't really working for me so I saved my testing till the end which led me to many complications on how I would actually test my components. I did however find that integration tests ended up feeling the most effective option in my applications case, as I needed to test my Product and how it integrates with the Shopping Cart and related functionality.