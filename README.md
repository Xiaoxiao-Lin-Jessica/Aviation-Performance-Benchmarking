# Capstone: Aviation Project Benchmarking

## Introduction

In the rapidly evolving aviation industry, understanding the operational dynamics of airlines is crucial for stakeholders, ranging from passengers to policymakers. This project, **Aviation Project Benchmarking**, aims to provide a comprehensive data visualization web platform for Australian airlines, offering insights into their domestic flight operations.

Motivated by the need for transparency and easy access to critical operational metrics, this platform focuses on presenting data related to seat occupancy/load factor, traffic intensity, delay rates, and cancellation rates of major airlines operating within Australia.

The primary objective of this endeavor is to facilitate informed decision-making for airline management. For airline operators, it offers a comparative analysis, enabling them to identify areas of improvement and strategize accordingly.

To achieve this, we employed a combination of data collection methods, primarily sourcing from government databases and aviation authorities. The data was then processed and analyzed using advanced analytics tools to derive meaningful patterns and trends.

The visualization web platform was designed with user-friendliness in mind, ensuring that even individuals without a technical background can navigate and understand the presented data effortlessly.

Preliminary findings indicate significant variations in the operational metrics across different airlines and time frames. Such insights are invaluable for predicting future trends, optimizing operations, and enhancing the overall passenger experience.

We believe that this platform will not only bridge the information gap but also foster a competitive environment, pushing airlines to elevate their standards.

## Demo

[![Watch the Video](https://i.vimeocdn.com/video/880386815.webp?s=bc78adba01)](https://player.vimeo.com/video/880386815?h=bc78adba01 "Click to Watch the Video")


## Approach

- **Data Visualization**: PowerBI.
- **Database**: Firebase Data Storage.
- **Data Communication**: Spring Boot REST API.
- **Security**:
  - The locally accessed web.
  - Isolated design of the frontend, backend, and database.
  - Third-party security services i.e., Google.
  - Predefined user account.
  - SSE-BCrypt system to secure user authentication.

## Usage

To use this platform, you will need to set up the appropriate environment:

1. **Node.js Environment**: Download the LTS version and configure Node.js. [Follow the setup instructions here.](https://nodejs.org/en/download)  
If you not sure whether you have Node.js installed, run the following command in your terminal to check:  
`npm -v` and `node -v`
Once finish download and install, use the same command from above in your termial to check if the corresponding version is displayed, the installation is successful.
2. **Java Virtual Machine**: Use SDK 11.

The PowerBI report is expired in an hour, please contact us to refresh the access token.

## Installation

To get this project up and running on your local machine for development and testing purposes, follow these steps:

```bash
# Clone the repository using SSH
git clone git@github.sydney.edu.au:yzou9073/Capstone.git

# Navigate to the project directory
cd Capstone
cd frontend
cd capstone-project

# Install dependencies for the front-end
# Where 'package.json' is located
npm install

####Notes
There are high chance that some dependencies will not install successfully while using the above code. After normal installation, if an error occurs when running the front end of this project, please manually install the corresponding dependencies according to the error prompts.
The following code is prioritized that shows a high to low chance of the frontend dependencies needing to be installed manually:

npm install react-scripts
npm install react-router-dom
npm install react react-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/styled-engine-sc

# Start the development server 
npm start

# For backend, please run "MyApplication.java".

