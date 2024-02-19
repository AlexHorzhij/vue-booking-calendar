# vue-booking-calendar

## Description

This project is a hotel booking calendar built with Vue 2 and Vuex. It allows users to view and manage weekly reservations for each apartment. The application displays a calendar grid where each row represents an apartment, and each column represents a day of the week (Mon-Sun). Reservations are visualized with solid lines indicating the client's name and duration.

# The project implements the following requirements:

- Vue 2: Utilizes Vue.js for creating components and managing the UI.
- Vuex: Implements Vuex for state management to handle reservations data and navigation state.
- Calendar Display: Displays weekly reservations with a solid line representing the reservation period.
- Navigation Buttons: Implements navigation buttons - "Forward," "Back," and "Today" for easy navigation.
- Reservation Time: Accounts for check-in and check-out from the middle of the day.
- Reservation Pop-up: Features a pop-up displaying reservation details when a user clicks on a reservation line.

## Navigation
Use the provided navigation buttons to move forward, backward, or return to the current week.

## Reservation Details
Click on a reservation line to view detailed information about the client, apartment, start date, and end date in a pop-up.

## Git Repository
This project's Git repository is hosted at https://alexhorzhij.github.io/vue-booking-calendar/

## Getting Started
Follow these steps to set up and run the project:

- Clone the repository:

git clone https://alexhorzhij.github.io/vue-booking-calendar/

- Navigate to the project directory:

cd vue-booking-calendar

- Install dependencies:

npm install

- Run the application:

npm run serve
Open your browser and go to http://localhost:8080 to view the hotel booking calendar.

