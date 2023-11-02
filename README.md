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

[![Watch the video](link-to-thumbnail-image)](link-to-demo-video)

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

1. **Node.js Environment**: Download and configure Node.js. [Follow the setup instructions here.](link-to-nodejs-setup)
2. **Java Virtual Machine**: Use SDK 11. [Installation guide.](link-to-jvm-sdk-11-setup)

## Installation

Provide step-by-step series of examples that tell you how to get a development environment running.

```bash
# Clone the repository
git clone https://github.com/your-username/Capstone-Aviation-Project-Benchmarking.git

# Navigate to the project directory
cd Capstone-Aviation-Project-Benchmarking

# Install dependencies
npm install

# Start the development server
npm start
