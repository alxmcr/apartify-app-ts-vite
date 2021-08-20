
# Apartify App

Find the apartment of your dreams.


## Features

- Find an apartment.
- List of all apartments.
- Information about the apartments.
- Geolocation an apartment with Maps.

  
## Lessons Learned

I learned and practice more about `HTML`, `CSS`, `JS`, `TypeScript`, `React.js`, and `React Hooks`.

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/apartify-react-app
```

Go to the project directory

```bash
  cd apartify-react-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`VITE_APP_ACCESS_TOKEN_MAPBOX`

You should put as value the API KEY that you got from [Mapbox's API](https://www.mapbox.com/).

`VITE_APP_ACCESS_STYLE_MAP_MAPBOX`

Mapbox styles (like `mapbox://styles/mapbox/streets-v11` or `mapbox://styles/mapbox/outdoors-v11`).

`VITE_APP_API_BASE_URL`

Base URL to your REST API.

`VITE_APP_API_VERSION`

API REST version: `v1`, `v2`, and so on.

Also we need to add them in `global.d.ts`:

```javascript
interface ImportMetaEnv {
    VITE_APP_ACCESS_TOKEN_MAPBOX: string
    VITE_APP_ACCESS_STYLE_MAP_MAPBOX: string
    VITE_APP_API_VERSION: string
    VITE_APP_API_BASE_URL: string
}
```
  
## Tech Stack

`HTML`, `CSS`, `JavaScript`, `TypeScript`, and `React.js`.

  
## Screenshots

![App Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1628141624/Portfolio/appartify-assets/images/apartify-home-page_za33wp.png)

  
## Demo

[https://apartify.netlify.app/](https://apartify.netlify.app/)

  
## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

  
## Feedback

If you have any feedback, please reach out to me at amcocarojas@gmail.com.

  