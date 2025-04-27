# HMCTS-DevChallenge-Front-end

A **React** application built with **_Vite_**, providing a user interface for managing tasks.  
Part of the **Junior Software Developer** coding challenge for **HMCTS**.

> For the back-end API repository, visit: [HMCTS-DevChallenge-TasksAPI](https://github.com/YordanovDnA/HMCTS-DevChallenge-TasksAPI)

---

## Dependencies used

- **_React (with Vite)_** – Front-end framework
- **_Axios_** – For HTTP requests
- **_Bootstrap 5_** – For styling and layout
- **_Jest_** – For unit testing
- **_React Testing Library_** – For component testing

---

## Installation and Setup

Clone the repository and install dependencies:

```bash
npm install
```

**_Make sure to navigate into the correct project folder._**

```bash
cd ctm-frontend
```

##Starting the Application

To start the development server, run:

```bash
npm run dev

```

This will launch the app on:
http://localhost:5173 (or the next available port)

##Testing
Run the front-end tests with:

```bash
npm run test
```

This will execute component and unit tests using Jest and React Testing Library.

Notes
The front-end expects the back-end API to be running on http://localhost:5000.

Basic **CRUD** operations are available: create, read, update-status, and delete tasks.

Status options dynamically adjust their background color based on value.
