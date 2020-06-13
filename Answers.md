# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JS library that helps with the problem of state and scalability in web apps. It does this through the use of hooks and components. Components break up the app into managable pieces and hooks help manage state-based rendering of pages.

1. Describe component state.

    Component state is the mutable information held within a component. Any change in state caused the component to re-render.

1. Describe props.

    Props are information about state passed into a component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    side effects are code snippets that don't fit within the primary rendering model of react. They are hidden away in hooks such as useEffect() so their execution can be managed appropriately. Failure to manage side effects can cause render loops and possibly crash the browser.
