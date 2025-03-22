# Portfolio + AI Agents

<div align="center">
<img src="./.gitassets/cover.png" width="350px" />

<div data-badges>
<img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/stars/phgeek/ai-agents-portfolio?style=for-the-badge" />
<img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/forks/phgeek/ai-agents-portfolio?style=for-the-badge" />
<img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/phgeek/ai-agents-portfolio?style=for-the-badge" />
</div>

<div data-badges>
<img alt="Next.js" src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img alt="NestJS" src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="Prisma" src="https://img.shields.io/badge/Prisma-121c25?style=for-the-badge&logo=Prisma&logoColor=white" />
<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-fff?style=for-the-badge&logo=tailwind-css&logoColor=00bcff" />
<img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img alt="n8n" src="https://img.shields.io/badge/n8n-fff?style=for-the-badge&logo=n8n&logoColor=ea4b71" />
<img alt="Supabase" src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase" />
</div>
</div>

This is a full-stack application that integrates popular market technologies to create a digital showcase of a developer’s skills and projects. This platform goes beyond simply displaying past work, serving as a practical demonstration of the professional’s technical capabilities, demonstrating their mastery of modern web development.

In addition to showcasing the developer’s projects, the application incorporates intelligent AI agents that have full access to the professional’s resume, GitHub repositories, and history. This integration allows recruiters and potential clients to explore specific aspects of the developer’s technical skills through real-time interactions via chat. Chats with agents provide valuable insights, allowing visitors to ask questions and receive detailed information about the professional’s skills and experience, making the evaluation process more dynamic and informative.

## Running the project

### Requirements

-   Node.js installed

### Execution

1. Clone this repository:

```sh
git clone https://github.com/phgeek/ai-agents-portfolio.git
```

2. Access the project directory:

```sh
cd ai-agents-portfolio
```

3. Access your [Supabase](https://supabase.com/) account or create a new account.

4. Navigate to the project in Supabase and click the `connect` button.

5. Click select ORM and select the Prisma ORM.

6. Copy the listed environment variables, create a `.env` file in the backend folder and fill it with the following information:

    ```
    DATABASE_URL=
    DIRECT_URL=
    PORT=
    ```

    **Note: If the port value is not added, the application will run on port 4000 by default**

7. Create an account on the [n8n](https://n8n.io) website, and import the flow defined in the personal-assistant file that is in the assets folder.

8. After importing the flow, click on the first node, access `webhooks url`, click on `Production URL` and copy the value of this URL.
   **Note: Remember to activate the workflow in n8n**

9. Create a `.env` file in the web folder and fill it with the following information, where the API URL is the backend URL and the second variable must have as its value the URL that we extracted in n8n:

    ```
    NEXT_PUBLIC_API_URL=
    NEXT_PUBLIC_CHAT_WEBHOOK=
    ```

10. Install the dependencies of the `frontend` and `backend` projects with the `npm i` command in each of the folders.

11. Open the `frontend` and `backend` folders in two different terminals and run the `npm run dev` command in each of the terminals to run the project.

## Project Features

-   Project Viewing
-   AI Agent Integration via Chat
-   Integrated GitHub Repositories
-   Featured Technologies List
-   Project Technologies List
-   Search for projects by ID with associated technologies

![](./.gitassets/2.png)

## Useful links

-   [Next.js](https://nextjs.org/docs)
-   [NestJS](https://docs.nestjs.com/)
-   [Prisma](https://www.prisma.io)
-   [Supabase](https://supabase.com)
