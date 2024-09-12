# Contact Management App with Charts and Maps

This project is a contact management application with COVID-19 charts and maps, built using React, TypeScript, Redux, and React Query.

## Features

- Contact Management:

  - Add, edit, and delete contacts
  - View a list of all contacts
  - Store contact data using Redux

- Charts and Maps:
  - Display a line graph showing COVID-19 cases fluctuations
  - Show a world map with markers for country-specific COVID-19 data

## Technologies Used

- React
- TypeScript
- Redux (for contact data management)
- React Query (for API data fetching)
- React Router (for navigation)
- Tailwind CSS (for styling)
- Recharts (for line graph)
- React Leaflet (for world map)

## Project Structure

- `/src`
  - `/components`: Reusable React components
  - `/pages`: Main page components
  - `/store`: Redux store configuration and slices
  - `/types`: TypeScript type definitions
  - `/utils`: Utility functions and helpers

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/contact-management-app.git
   ```

2. Navigate to the project directory:

   ```
   cd contact-management-app
   ```

3. Install dependencies:

   ```
   yarn install
   ```

4. Start the development server:

   ```
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

## Available Scripts

- `yarn dev`: Runs the app in development mode
- `yarn build`: Builds the app for production
- `yarn lint`: Runs the linter to check for code style issues
- `yarn preview`: Serves the production build locally

## API Endpoints

- World wide data of cases: https://disease.sh/v3/covid-19/all
- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## Responsive Design

The application is designed to be responsive and works well on both desktop and mobile devices. It features a hamburger menu for easy navigation on smaller screens.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
