const tech = {
  react: { name: "react", url: "https://reactjs.org/" },
  reactrouter: { name: "reactrouter", url: "https://reactrouter.com/" },
  typescript: { name: "typescript", url: "https://www.typescriptlang.org/" },
  sass: { name: "sass", url: "https://sass-lang.com/" },
  node_dot_js: { name: "node-dot-js", url: "https://nodejs.org/en/" },
  express: { name: "express", url: "https://expressjs.com/" },
  mongodb: { name: "mongodb", url: "https://www.mongodb.com/" },
  amazonaws: { name: "amazonaws", url: "https://aws.amazon.com/s3/" },
  socket_dot_io: { name: "socket-dot-io", url: "https://socket.io/" },
  bootstrap: { name: "bootstrap", url: "https://getbootstrap.com/" },
  next_dot_js: { name: "next-dot-js", url: "https://nextjs.org/" },
  firebase: {
    name: "firebase",
    url: "https://firebase.google.com/",
  },
  google: {
    name: "google",
    url: "https://firebase.google.com/docs/auth/android/google-signin",
  },
  webpack: { name: "webpack", url: "https://webpack.js.org/" },
  jest: { name: "jest", url: "https://jestjs.io/" },
  javascript: {
    name: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
};

const {
  react,
  reactrouter,
  typescript,
  sass,
  node_dot_js,
  mongodb,
  amazonaws,
  socket_dot_io,
  bootstrap,
  next_dot_js,
  express,
  firebase,
  google,
  javascript,
  jest,
  webpack,
} = tech;

const projects = [
  {
    title: "Fakebook",
    live_url: "https://fakebook-client.vercel.app/",
    code_url: "https://github.com/DoviMaj/fakebook-client",
    description:
      "Make friends, chat with them in real time, post text and images, authenticate with Facebook or Google.",
    tech: [
      react,
      reactrouter,
      typescript,
      sass,
      node_dot_js,
      mongodb,
      amazonaws,
      socket_dot_io,
    ],
  },
  {
    title: "Blog Project",
    live_url: "https://blog-client-dovimaj.vercel.app/",
    code_url: "https://github.com/DoviMaj/blog-client",
    description:
      "Blazing fast with Next.js pre-rendered pages. Owners can edit posts when authenticated, users can comment.",
    tech: [
      react,
      next_dot_js,
      typescript,
      bootstrap,
      sass,
      node_dot_js,
      express,
      mongodb,
    ],
  },

  {
    title: "Note App",
    live_url: "https://dovimaj.github.io/note-app-2.0/",
    code_url: "https://github.com/DoviMaj/note-app-2.0",
    description:
      "Take notes, add tasks to your notes, change the background image and sync with your google account.",
    tech: [react, firebase, google],
  },
  {
    title: "Current Weather",
    live_url: "https://dovimaj.github.io/weather-app/",
    code_url: "https://github.com/DoviMaj/weather-app",
    description:
      "Made to practice API calls, promises with async await. openweathermap and Geolocation API.",
    tech: [react],
  },
  {
    title: "Battleship Game",
    live_url: "https://dovimaj.github.io/battleship/",
    code_url: "https://github.com/DoviMaj/battleship",
    description:
      "Made to practice TDD (Test Driven Development) principles with Jest and VanillaJS.",
    tech: [javascript, jest, webpack],
  },
  {
    title: "Shopping-cart",
    live_url: "https://dovimaj.github.io/shopping-cart/",
    code_url: "https://github.com/DoviMaj/shopping-cart",
    description:
      "Made to practice React Functional Components, Hooks and React Router.",
    tech: [react, reactrouter, bootstrap],
  },
];

export default projects;
