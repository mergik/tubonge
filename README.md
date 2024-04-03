
# Tubonge

Simple realtime chat application using Websockets and MongoDB

## Tech Stack

**Client:** React, TailwindCSS, Vite

**Server:** Node, Express, MongoDB

### Tools

**Client:** Daisy UI, React-hot-toast, Zustand

**Server:** JWT, Socket.io

## Features

- User authentication
- Session cookies
- 1:1 realtime conversations
- Online indicator
- Auto generated avatar

## Live Demo

[Deployed Version 0.4](https://tubonge-kipz.onrender.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/mergik/tubonge.git
```

Go to the frontend directory & install dependencies

```bash
  cd tubonge/frontend
  npm install
```

Start the frontend server

```bash
  npm run dev
```

Go to the backend directory & install dependencies

```bash
  cd tubonge/backend
  npm install
```

Duplicate the .env.sample file and rename it .env
Fill in the variables in the formats shown in comments.

```
    MONGO_URI =         # paste your mongodb connection driver here

    PORT =              # choose a port of your choice.
                        # remember to change 'target: "http://localhost:<PORT>" ' in frontend/vite.config.js with the port you chose here
 
    JWT_SECRET =        # generate a super secret 32 digit number and place it here

    JWT_EXPIRES_IN =    # enter a time in seconds representing when the token expires

    NODE_ENV = 'development'    # for development only
```

Start the backend server

```bash
  npm run dev
  // server will start on port 5000 if you didn't specify a port in .env
```

## Deployment

To build this project run this command in the root directory

```bash
  npm run build
  npm start
```

## Authors

- [@Hillary Kiprotich](https://github.com/hillary-254)
- [@Merlix Gikunju](https://www.github.com/mergik)
- [@Ken Ryan](https://github.com/KennedyRyan-code)

## License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
