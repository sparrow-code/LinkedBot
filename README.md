# LinkedBot

![Logo](https://raw.githubusercontent.com/sparrow-code/LinkedBot/802db4823fe44db821201c97d266a2664b4d4f07/public/logo.png)

This is a bot designed to automate actions on LinkedIn using Node.js. The bot can be configured to perform various LinkedIn-related tasks based on the provided credentials and settings.

## Requirements

- **Node.js** (Ensure that Node.js is installed on your machine)
- **npm** (Comes with Node.js)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sparrow-code/LinkedBot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LinkedBot
   ```
3. Install the required dependencies:
   ```bash
   npm install
   npm -g install nodemon
   ```

## Running the Project

- To start the project in production mode:

  ```bash
  npm run start
  ```

- To run the project in development mode (with hot reloading):
  ```bash
  npm run dev
  ```

## Configuration

Before running the bot, you need to configure the necessary settings.

1. Go to `/const/config.js` and update the `config` object with your LinkedIn credentials and settings:

   ```javascript
   const config = {
     auth: {
       username: "your-linkedin-email",
       password: "your-linkedin-password",
     },
     port: 3000,
     headless: false, // [true/false] - set to true to run the bot in headless mode
     company_id: "found_in_url", // LinkedIn company ID
   };
   ```

2. Save the file after adding your details.
3. Run Command `npm run dev`

## Upcoming Features

- **API support**: I will be writing API endpoints in the near future to interact with this bot programmatically.

---

Feel free to contribute or open issues for any bugs or suggestions.
