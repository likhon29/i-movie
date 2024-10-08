# iMovie - Full-Stack Developer Technical Interview

## Overview

iMovie is a single-page web application built with **Next.js** and **TypeScript**. It integrates The Movie Database (TMDB) API to display information about the latest, popular, and now-playing movies and TV shows. This project demonstrates a three-column layout with functional and non-functional sections, incorporating best practices, component reusability, and Bootstrap-based UI design.

## Live Site

[Live Site](https://i-movie-cyan.vercel.app/)

## Features / Requirements

1. **Three-Column Layout**:

   - The web application features a three-column design.
   - **First Column**: Non-functional, containing static items like Menu, Library, Category, and General (no interaction required). Icons are used to represent these items.
   - **Second Column**: Functional, displaying movie and TV show data. It has two tabs for Movies and TV Shows:
     - **Tab 1: Movies**:
       1. **Row 1**: Displays the latest movie from the TMDB API.
       2. **Row 2**: Displays a horizontal list of the first 12 "Now Playing" movies, with 4 items visible at a time. Clicking on an item updates the first row with its details.
       3. **Row 3**: Displays a horizontal list of the first 12 popular movies, with 3 items visible at a time. Clicking on an item updates the first row with its details.
     - **Tab 2: TV Shows**:
       1. **Row 1**: Displays the latest TV show from the TMDB API.
       2. **Row 2**: Displays a horizontal list of the first 12 "Now Playing" TV shows, with 4 items visible at a time.
       3. **Row 3**: Displays a horizontal list of the first 12 popular TV shows, with 3 items visible at a time.
   - **Third Column**: Non-functional, displaying more popular movie and TV show data:

     1. First row shows 2 popular movies.
     2. Second row shows 4 popular TV shows.

   - **Details Section**: Clicking on a movie or TV show in the second column displays detailed information in the third column. The details include the title, overview, release date, and rating.

2. **API Integration**:

   - The application integrates with the TMDB API to fetch movie and TV show data.
   - **API Key**: Use a TMDB API key to make requests.
   - **API Endpoints**: Utilize the following endpoints:
     - **Movie API**:
       - Latest Movie
       - Now Playing Movies
       - Popular Movies
       - Movie Details
     - **TV Show API**:
       - Latest TV Show
       - Now Playing TV Shows
       - Popular TV Shows
       - TV Show Details

3. **Styling**:
   - Use Bootstrap for UI design.
   - Ensure responsive design across different devices.
   - Slider: Implement a horizontal slider for displaying multiple items.

## Technical Details

- **Frontend Framework**: Next.js (with TypeScript)
- **API**: The Movie DB API
- **Styling**: Bootstrap for UI design
- **Responsive Design**: Ensured across different devices using Bootstrap grid and utility classes.
- **Code Architecture**: Follows best practices, including component reusability, separation of concerns, and proper project structure.

## API Endpoints

The application integrates with the following TMDB API endpoints:

### Movie API

- **Latest Movie**: [Get Latest Movie](https://developers.themoviedb.org/3/movies/get-latest-movie)
- **Now Playing Movies**: [Get Now Playing](https://developers.themoviedb.org/3/movies/get-now-playing)
- **Popular Movies**: [Get Popular Movies](https://developers.themoviedb.org/3/movies/get-popular-movies)
- **Movie Details**: [Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)

### TV Show API

- **Latest TV Show**: [Get Latest TV Show](https://developers.themoviedb.org/3/tv/get-latest-tv)
- **Now Playing TV Shows**: [TV Shows Airing Today](https://developers.themoviedb.org/3/tv/get-tv-airing-today)
- **Popular TV Shows**: [Popular TV Shows](https://developers.themoviedb.org/3/tv/get-popular-tv-shows)
- **TV Show Details**: [TV Show Details](https://developers.themoviedb.org/3/tv/get-tv-details)

## Getting Started

Follow the instructions below to set up and run the iMovie project locally.

### Prerequisites

- Node.js (version 14+)
- Yarn or npm
- [TMDB API Key](https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/likhon29/i-movie.git
cd i-movie
```

Install the dependencies:

```
yarn install
# or
npm install
```

3. Create a .env.local file in the root directory and add your TMDB API key:

```
NEXT_PUBLIC_API_KEY= your_tmdb_api_key_here
NEXT_PUBLIC_API_URL= your_tmdb_api_key_here
NEXT_PUBLIC_BEARER_TOKEN= your_tmdb_api_key_here
NEXT_PUBLIC_IMAGE_URL= yout_tmdb_api_key_here
```

4. Run the development server:

```
yarn dev
# or
npm run dev
```

5. Open your browser and visit http://localhost:3000 to see the application.

```
├── public               # Public assets
└──src                   # Source files
    ├── components       # Reusable components
    ├── app              # Next.js app          # Public assets
    ├── api              # Custom CSS and Bootstrap styling
    ├── assests          # resources
    ├── config           # Next.js pages
    ├── context          #Context API
    ├── hooks            #Hooks
    ├── types            #Types
    ├── utils           #Utility functions

├── .env.local           # API key configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

### Key Components

- **MovieCard**: Displays a movie poster and short information.
- **TVShowCard**: Displays a TV show poster and short information.
- **HorizontalList**: Scrollable horizontal list displaying multiple items.
- **DetailsSection**: Shows detailed information about a selected movie or TV show.

### Best Practices

- **TypeScript**: Ensures type safety across the application.
- **Component Reusability**: Focuses on creating reusable React components.
- **UI Design**: Built using Bootstrap for a responsive and modern UI.
- **Error Handling**: Handles API calls with proper error messages and fallback content.

### GitHub Workflow

1. **Branching**: Use feature branches for development (`feature/movie-tab`, `feature/tv-tab`, etc.).
2. **Commits**: Follow conventional commits for better clarity:
   - `feat`: New features
   - `fix`: Bug fixes
   - `refactor`: Code refactoring
   - `style`: Changes that do not affect logic (e.g., formatting)
3. **Pull Requests**: Merge changes to `main` via pull requests after code review.

### Deployment

Once development is complete, the project can be deployed to platforms like **Vercel**. Follow these steps for deployment:

1. Push your code to GitHub:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Deployment

Deploy on **Vercel** or any Next.js-compatible hosting service:

1. Sign in to **Vercel** and link your GitHub repository.
2. Set the necessary environment variables (TMDB API key).
3. Deploy the project.

---

### License

This project is licensed under the **MIT License**.

---

### Author

- **Name**: Md Abdur Rouf Likhon
- **Contact**: [mdabdurrouf.likhon@gmail.com](mailto:mdabdurrouf.likhon@gmail.com)

---

### Acknowledgements

- **The Movie Database (TMDB)** for providing the API.
- **Bootstrap** for the front-end design framework.

### Key Points in the `README.md`:

- **Overview**: A general introduction to the iMovie project.
- **Features**: Highlighting key functionalities of the app.
- **API Endpoints**: Mentioning the TMDB APIs used in the project.
- **Getting Started**: Steps for setting up and running the app locally.
- **Best Practices**: Ensuring good coding standards.
- **GitHub Workflow**: Outlining version control strategies.
- **Deployment**: Instructions for deployment.
- **License**: Open-source MIT License.
- **Acknowledgements**: Recognizing tools and resources used.
