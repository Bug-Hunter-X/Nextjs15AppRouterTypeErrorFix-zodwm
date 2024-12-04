# Next.js 15 App Router TypeError: Cannot read properties of undefined (reading 'props')

This repository demonstrates a common error encountered when using the experimental App Router in Next.js 15.  The error, 'TypeError: Cannot read properties of undefined (reading 'props')', typically arises due to incorrect data fetching or prop passing within the app directory structure.

## Bug Description

The provided `bug.js` file shows a simple Next.js 15 app that fails to render correctly, throwing the aforementioned TypeError. This often happens when components try to access props that haven't been properly defined or passed down.

## Solution

The `bugSolution.js` file offers a corrected version of the code. It ensures proper data fetching and prop passing to prevent the error.  The key is to correctly define the component structure and handle asynchronous data fetching within the framework's guidelines. Refer to the Next.js documentation for best practices.
