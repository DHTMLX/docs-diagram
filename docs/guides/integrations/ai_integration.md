---
sidebar_label: Integrating Diagram with AI
title: Integrating Diagram with AI
description: You can learn about the Integrating Diagram with AI in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Integrating Diagram with AI

DHTMLX Diagram can be integrated with AI for creating AI-powered diagramming applications. We have prepared an example on how to use DHTMLX Diagram with AI to build an application for creating an org chart out of a request provided in natural language.

The demo app includes such features as text-to-diagram conversion, AI-driven JSON generation, an instant live preview of a ready diagram and an inbuilt code editor for viewing and adjusting the generated JSON data to update the diagram preview on the fly. For more information, refer to the corresponding [Example on GitHub](https://github.com/DHTMLX/diagram-org-chart-builder-ai-demo).

## Project setup

To download the project, clone the repository by using the following command:

~~~jsx
git clone diagram-org-chart-builder-ai-demo
~~~

and then go the project repository via the command below:

~~~jsx
cd diagram-org-chart-builder-ai-demo
~~~

### Installing dependencies

To install dependencies and run the app, you need to make use of a package manager. To install the demo app described in this guide, you should use [npm](https://www.npmjs.com/) by calling the following command:

~~~jsx
npm install
~~~

### Adjusting environment variables

Then you need to configure the environment variables. For this, create a new file named `.env` inside the **diagram-org-chart-builder-ai-demo** directory by copying the content of the `env.sample` file. 
The newly created `.env` file will store your keys and configuration. Fill in the required values provided below:

~~~jsx title="diagram-org-chart-builder-ai-demo/.env"
# --- OpenAI API Configuration ---
OPENAI_API_KEY=sk-YourSecretApiKeyGoesHere
OPENAI_BASE_URL=https://api.openai.com/v1

# --- Security Configuration ---
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5500,http://127.0.0.1:5500

# --- Server Configuration (optional) ---
PORT=3001
~~~

:::info
Do NOT upload your `.env` file, since it contains sensitive information!
:::

Check descriptions of the `.env` file variables below:

- `OPENAI_API_KEY`: (Required) Your secret API key for the AI service.
- `OPENAI_BASE_URL`: The API endpoint for the AI service. Can be changed to use a proxy or a different provider compatible with the OpenAI API.
- `CORS_ALLOWED_ORIGINS`: A crucial security setting. This is a comma-separated list of web addresses allowed to connect to your backend server. For production, you **must** change this to your public frontend's URL (e.g., https://myapp.com).
- `PORT`: (Optional) The port number on which the server will run. Defaults to 3001 if not set.

### Running the application

To start the application, use the following command in the app directory:

~~~jsx
npm start // this is the required start command
~~~

You should see the output below in your terminal:

~~~jsx
Server started on port 3001. 
~~~

Then open the web browser and navigate to: `http://localhost:3001` to see the application ready to generate diagrams.

## How the demo app works

These are the basic steps for transforming a text request into a diagram:

- First, the user enters a text description of the diagram in plain terms, for example: "A diagram with a top manager and five departments each having two employees".
- Then the prompt is sent to the backend, where the AI service generates a structured JSON configuration based on the request.
- After that the frontend gets the resulting data and renders an interactive DHTMLX diagram instantly.
- At the following stage, the corresponding JSON code is displayed in the code editor below the diagram. The user can fine-tune the code and edit the resulting diagram in real time.
- Finally, the user can save the generated data in a JSON file or export the diagram to a PDF or PNG file.

## Step-by-step tutorial on building the application

If you want to study the process of creating the application described above, learn more about its structural parts and how they work together, follow the detailed guide [How to Build an AI-Powered Org Chart Builder with DHTMLX]().
