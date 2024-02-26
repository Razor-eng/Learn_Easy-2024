const Questions = [
    {
        id: 1,
        logo: '/languages/reactjs.png',
        title: "ReactJS",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks.",
        notes: [
            {
                heading: "React Tutorial",
                data: [
                    {
                        id: 1,
                        topic: "Introduction",
                        context: "ReactJS is a free and open-source front-end JavaScript library which is used to develop various interactive user-interfaces. It is a simple, feature rich and component based UI library. When we say component based, we mean that React develops applications by creating various reusable and independent codes. This UI library is, thus, widely used in web development."
                    },
                    {
                        id: 2,
                        topic: "Installation",
                        context: `Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:
                        \n\tnpx create-react-app my-react-app
                        \nOR, you can directly make your application without specifying a name, like this:
                        \n\tnpx create-react-app .
                        \nIn this case, all files will be kept in the current directory.
                        \nNote: When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions.
                        \nOnce base application is created, if folder specified you just have to enter the folder. You can use this command to enter:
                        \n\tcd directory-name
                        \nThen just start up the application with this command:
                        \n\tnpm start
                        \nand you are good to go!`
                    },
                    {
                        id: "",
                        topic: "",
                        context: ""
                    },
                ]
            },
            {
                heading: "React Hooks",
                data: [
                    {
                        topic: "Introduction",
                        context: `React Hooks are a powerful feature introduced in React 16.8 that allows developers to add state and other React features to functional components. Prior to the introduction of hooks, state management and other complex logic could only be implemented in class components using lifecycle methods. With hooks, developers can now write more concise and reusable code by leveraging functions instead of classes.\n
                        Hooks provide several benefits in React development. Firstly, they simplify the management of component state. With the "useState" hook, you can add state to a functional component, eliminating the need for a class-based component. This results in cleaner and more readable code.
                        `
                    },
                    {
                        topic: "useCallback",
                        context: `useCallback is a React hook that allows you to optimize the performance of your React components by memoizing a function. In simple terms, it helps you avoid unnecessary re-creation of functions on each render.\n
                        useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.
                        `
                    },
                    {
                        topic: "",
                        context: ""
                    },
                ]
            },
        ],
        questions: [
            {
                question: "What are the features of React?",
                answer: "React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach."
            },
            {
                question: "What are the advantages of using React?",
                answer: `MVC is generally abbreviated as Model View Controller.
                Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual    DOM, the efficiency of the app improves.
                Gentle learning curve: React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
                SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
                Reusable components: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
                Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement
                `
            },
            {
                question: "What are the limitations of React?",
                answer: `The few limitations of React are as given below:
                /pReact is not a full-blown framework as it is only a library.
                /pThe components of React are numerous and will take time to fully grasp the benefits of all.
                /pIt might be difficult for beginner programmers to understand React.
                /pCoding might become complex as it will make use of inline templating and JSX.`
            },
            {
                question: "What are keys in React?",
                answer: `A key is a special string attribute that needs to be included when using lists of elements.
                Importance of keys :
                /pKeys help react identify which elements were added, changed or removed.
                /pKeys should be given to array elements for providing a unique identity for each element.
                /pWithout keys, React does not understand the order or uniqueness of each element.
                /pWith keys, React has an idea of which particular element was deleted, edited, and added.
                /pKeys are generally used for displaying a list of data coming from an API.
                `
            },
            {
                question: "What is JSX?",
                answer: `JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
                As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.`
            },
            {
                question: "What is the virtual DOM?",
                answer: `As stated by the react team, virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.`
            },
            {
                question: "What are props in React?",
                answer: `The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.
                The main purpose of props is to provide different component functionalities such as:
                /pPassing custom data to the React component.
                /pUsing through this.props.reactProp inside render() method of the component.
                /pTriggering state changes.`
            },
            {
                question: "Explain React state and props.",
                answer: `React State:
                Every component in react has a built-in state object, which contains all the property values that belong to that component.
                In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to the re-rendering of the component.
                \n
                React Props:
                Every React component accepts a single object argument called props (which stands for “properties”).  These props can be passed to a component using HTML attributes and the component accepts these props as an argument.
                /pUsing props, we can pass data from one component to another.
                `
            },
            {
                question: "Explain React Hooks?",
                answer: `What are Hooks:
                Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.
                React Hooks cannot be used in class components. They let us write components without class.
                Why were Hooks introduced in React:
                Functional components were called stateless components and only class components were used for state management and lifecycle methods. The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks.
                `
            },
            {
                question: "What are the rules that must be followed while using React Hooks?",
                answer: `There are 2 rules which must be followed while you code with Hooks:
                /pReact Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
                /pIt is allowed to call the Hooks only from the React Function Components.`
            },
            {
                question: "What is useState() in React?",
                answer: `The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.
                The useState(0) will return a tuple where the first parameter represents the current state and the second parameter setParameter method will allow us to update the state of the parameter.
                `
            },
            {
                question: "What is the use of useEffect React Hooks?",
                answer: ` With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change.Using this, we can perform various calculations such as data fetching, setting up document title, manipulating DOM directly, etc, that don’t target the output value. The useEffect hook will run by default after the first render and also after each update of the component. React will guarantee that the DOM will be updated by the time when the effect has run by it.
                The useEffect React Hook will accept 2 arguments:
                /pThe first argument callback represents the function having the logic of side-effect and it will be immediately executed after changes were being pushed to DOM. 
                /pThe second argument dependencies represent an optional array of dependencies. The useEffect() will execute the callback only if there is a change in dependencies in between renderings.
                `
            },
            {
                question: "What are Custom Hooks?",
                answer: `A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.
                In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.
                /pThe disadvantage of Custom Hooks is it cannot be used inside of the classes.
                `
            },
            {
                question: "Why do React Hooks make use of refs?",
                answer: `Refs were only limited to class components but now it can also be accessible in function components through the useRef Hook in React.
                The refs are used for:
                /pManaging focus, media playback, or text selection.
                /pIntegrating with DOM libraries by third-party.
                /pTriggering the imperative animations.
                `
            },
            {
                question: "Explain about types of Hooks in React?",
                answer: `There are two types of Hooks in React. They ares
                1. Built-in Hooks: 
                The built-in Hooks are divided into 2 parts as given below
                Basic Hooks:
                /puseState(): 
                This functional component is used to set and retrieve the state.
                /puseEffect(): 
                It enables for performing the side effects in the functional components.
                /puseContext(): 
                It is used for creating common data that is to be accessed by the components hierarchy without having to pass the props down to each level.
                Additional Hooks:
                /puseReducer() : 
                It is used when there is a complex state logic that is having several sub-values or when the upcoming state is dependent on the previous state. It will also enable you to optimization of component performance that will trigger deeper updates as it is permitted to pass the dispatch down instead of callbacks.
                /puseMemo() : 
                This will be used for recomputing the memoized value when there is a change in one of the dependencies. This optimization will help for avoiding expensive calculations on each render.
                /puseCallback() : 
                This is useful while passing callbacks into the optimized child components and depends on the equality of reference for the prevention of unneeded renders.
                /puseImperativeHandle():  
                It will enable modifying the instance that will be passed with the ref object.
                /puseDebugValue(): 
                It is used for displaying a label for custom hooks in React DevTools.
                /puseRef() : 
                It will permit creating a reference to the DOM element directly within the functional component.
                /puseLayoutEffect():
                It is used for the reading layout from the DOM and re-rendering synchronously.
                2. Custom Hooks: A custom Hook is basically a function of JavaScript. The Custom Hook working is similar to a regular function. The “use” at the beginning of the Custom Hook Name is required for React to understand that this is a custom Hook and also it will describe that this specific function follows the rules of Hooks. Moreover, developing custom Hooks will enable you for extracting component logic from within reusable functions.`
            },
            {
                question: "Explain Strict Mode in React?",
                answer: `StrictMode is a tool added in version 16.3 of React to highlight potential problems in an application. It performs additional checks on the application.
                To enable StrictMode, <React.StrictMode> tags need to be added inside the application.
                StrictMode currently helps with the following issues:
                /pIdentifying components with unsafe lifecycle methods: 
                /pCertain lifecycle methods are unsafe to use in asynchronous react applications. With the use of third-party libraries, it becomes difficult to ensure that certain lifecycle methods are not used.
                /pStrictMode helps in providing us with a warning if any of the class components use an unsafe lifecycle method.
                /pWarning about the usage of legacy string API:
                /pIf one is using an older version of React, callback ref is the recommended way to manage refs instead of using the string refs. StrictMode gives a warning if we are using string refs to manage refs.
                /pWarning about the usage of findDOMNode:
                /pPreviously, findDOMNode( ) method was used to search the tree of a DOM node. This method is deprecated in React. Hence, the StrictMode gives us a warning about the usage of this method.
                /pWarning about the usage of legacy context API (because the API is error-prone):
                `
            },
            {
                question: "What are the reason for re-renders in React?",
                answer: `Reason for re-renders in React:
                /pRe-rendering of a component and its child components occur when props or the state of the component has been changed.
                /pRe-rendering components that are not updated, affects the performance of an application.`
            },
            {
                question: "What are the different ways to style a React component?",
                answer: `There are many different ways through which one can style a React component. 
                Inline Styling: 
                We can directly style an element using inline style attributes. Make sure the value of style is a JavaScript object.
                Using JavaScript object: 
                We can create a separate JavaScript object and set the desired style properties. This object can be used as the value of the inline style attribute.
                CSS Stylesheet: 
                We can create a separate CSS file and write all the styles for the component inside that file. This file needs to be imported inside the component file.
                CSS Modules: 
                We can create a separate CSS module and import this module inside our component. Create a file with “.module.css”‘ extension, styles.module.css.
                `
            },
            {
                question: "Name a few techniques to optimize React app performance?",
                answer: `There are many ways through which one can optimize the performance of a React app, let’s have a look at some of them:
                /pUsing useMemo( ):
                /pIt is a React hook that is used for caching CPU-Expensive functions.
                /pSometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.
                /puseMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.
                /pUsing React.PureComponent:
                /pIt is a base component class that checks the state and props of a component to know whether the component should be updated.
                /pInstead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders of a component unnecessarily.
                /pMaintaining State Colocation:
                /pThis is a process of moving the state as close to where you need it as possible.
                /pSometimes in React app, we have a lot of unnecessary states inside the parent component which makes the code less readable and harder to maintain. Not to forget, having many states inside a single component leads to unnecessary re-renders for the component.
                /pIt is better to shift states which are less valuable to the parent component, to a separate component.
                /pLazy Loading:
                /pIt is a technique used to reduce the load time of a React app. Lazy loading helps reduce the risk of web app performances to a minimum.`
            },
            {
                question: "How to pass data between react components?",
                answer: `Parent Component to Child Component (using props):
                With the help of props, we can send data from a parent to a child component.
                Child Component to Parent Component (using callbacks):
                This one is a bit tricky. We follow the steps below:
                /pCreate a callback in the parent component which takes in the data needed as a parameter.
                /pPass this callback as a prop to the child component.
                /pSend data from the child component using the callback.
                `
            },
            {
                question: "What are Higher Order Components?",
                answer: `Higher-Order Component(HOC) is a function that takes in a component and returns a new component.`
            },
            {
                question: "When do we need a Higher Order Component?",
                answer: `While developing React applications, we might develop components that are quite similar to each other with minute differences. In most cases, developing similar components might not be an issue but, while developing larger applications we need to keep our code DRY, therefore, we want an abstraction that allows us to define this logic in a single place and share it across components. HOC allows us to create that abstraction.`
            },
            {
                question: "Does React Hook work with static typing?",
                answer: `Static typing refers to the process of code check during the time of compilation for ensuring all variables will be statically typed. React Hooks are functions that are designed to make sure about all attributes must be statically typed. For enforcing stricter static typing within our code, we can make use of the React API with custom Hooks.`
            },
            {
                question: "Differentiate React Hooks vs Classes?",
                answer: `React Hooks:
                /pIt is used in functional components of React.
                /pIt will not require a declaration of any kind of constructor.
                /pIt does not require the use of this keyword in state declaration or modification.
                /pIt is easier to use because of the useState functionality.
                /pReact Hooks can be helpful in implementing Redux and context API.
                Classes:
                /pIt is used in class-based components of React.
                /pIt is necessary to declare the constructor inside the class component.
                /pKeyword this will be used in state declaration (this.state) and in modification (this.setState()).
                /pNo specific function is available for helping us to access the state and its corresponding setState variable.
                /pBecause of the long setup of state declarations, class states are generally not preferred.
                `
            },
            {
                question: "How does the performance of using Hooks will differ in comparison with the classes?",
                answer: `/pReact Hooks will avoid a lot of overheads such as the instance creation, binding of events, etc., that are present with classes.
                /pHooks in React will result in smaller component trees since they will be avoiding the nesting that exists in HOCs (Higher Order Components) and will render props which result in less amount of work to be done by React.`
            },
            {
                question: "What is React Router?",
                answer: `React Router refers to the standard library used for routing in React. It permits us for building a single-page web application in React with navigation without even refreshing the page when the user navigates. It also allows to change the browser URL and will keep the user interface in sync with the URL. React Router will make use of the component structure for calling the components, using which appropriate information can be shown. Since React is a component-based framework, it’s not necessary to include and use this package. Any other compatible routing library would also work with React.
                The major components of React Router are given below:                
                /pBrowserRouter: 
                It is a router implementation that will make use of the HTML5 history API (pushState, popstate, and event replaceState) for keeping your UI to be in sync with the URL. It is the parent component useful in storing all other components.
                /pRoutes: 
                It is a newer component that has been introduced in the React v6 and an upgrade of the component.
                /pRoute: 
                It is considered to be a conditionally shown component and some UI will be rendered by this whenever there is a match between its path and the current URL.
                /pLink: 
                It is useful in creating links to various routes and implementing navigation all over the application. It works similarly to the anchor tag in HTML.`
            },
            {
                question: "Can React Hook replaces Redux?",
                answer: `The React Hook cannot be considered as a replacement for Redux (It is an open-source, JavaScript library useful in managing the application state) when it comes to the management of the global application state tree in large complex applications, even though the React will provide a useReducer hook that manages state transitions similar to Redux. Redux is very useful at a lower level of component hierarchy to handle the pieces of a state which are dependent on each other, instead of a declaration of multiple useState hooks.`
            },
        ]
    },
    {
        id: 2,
        logo: '/languages/nextjs.png',
        title: "NextJS",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
        // questions:[
        //     {
        //         question: "",
        //         answer: ``
        //     },
        // ]
    },
    {
        id: 3,
        logo: '/languages/javascript.png',
        title: "JavaScript",
        description: "JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions.",
    },
    {
        id: 4,
        logo: '/languages/c++.png',
        title: "C++",
        description: "C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development.C++ is a high-level, general-purpose programming language.",
    },
]

export default Questions