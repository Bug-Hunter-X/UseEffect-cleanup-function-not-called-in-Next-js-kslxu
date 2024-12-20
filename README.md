# useEffect Cleanup Function Not Called in Next.js
This repository demonstrates a common issue in Next.js applications where the cleanup function within the `useEffect` hook is not consistently called when the component unmounts, leading to potential memory leaks or unexpected behavior.  The example uses a simple counter component to illustrate this problem.  The solution provided addresses the issue and ensures proper cleanup.

## Steps to Reproduce
1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Observe the console logs.  The expected behavior is to see 'Component mounted' and 'Component unmounted' messages.  If this does not happen, the issue is reproduced.

## Solution
The provided solution addresses the issue by ensuring the component is properly unmounted by adding a check if the component is mounted within the useEffect.