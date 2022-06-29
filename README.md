# VoloPay Assignment

## Live

Open [https://volopaydashboard.netlify.app](https://volopaydashboard.netlify.app) to view it in your browser.

## Local Development Setup

Clone this repo by running
`git clone https://github.com/jaybhoyar/volopay-assignment.git`.

In the project directory, you can run:

1. Install dependencies

```bash
yarn install
```

2. Update **BASE_URL** in src/components/App.jsx file

```diff
- const BASE_URL = "https://volopayserver.glitch.me" ;

+ const BASE_URL = "http://localhost:3500";
```

3. Start the server

```bash
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running JSON-SERVER locally

In a separate terminal tab, inside the project directory run:

```bash
yarn run db-server
```

Runs the JSON Server locally.
Open [http://localhost:3500](http://localhost:3500) to view it in your browser.
