## About

This is an example of websocket usage in a nextjs app \
The code is taken from this [article](https://blog.logrocket.com/implementing-websocket-communication-next-js/)

## How it work

The client make a fetch request to `/api/socket.js` where the socket.io server is created

## TODO

-   Close server once no more connections are present to save memory

## Getting Started

Install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
