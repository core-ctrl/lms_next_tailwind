# LMS Next.js + Tailwind (Demo)

## Features included (matching SDP rubric)
- Modular React components (components/).
- React hooks (custom hooks: useFetch, useLocalStorage) and built-in hooks.
- Context API for auth state (context/AuthContext.jsx).
- Client-side routing using Next.js pages and Link (file-based routing).
- API integration through Next.js API route `/api/courses` (uses data/courses.json).
- Data persistence: Auth and enrollments stored in `localStorage`.
- Responsive UI built with Tailwind CSS.

## Run locally
1. Unzip the project.
2. `cd lms_next_tailwind`
3. `npm install`
4. `npm run dev`
5. Open http://localhost:3000

This project is intentionally lightweight and focused on demonstrating the rubric points:
- Component design, hooks, context, routing, API fetching, localStorage persistence, responsive UI.

You can extend it (add Redux, unit tests, more pages) as needed for your SDP submission.


## Redux Integration
- Added Redux Toolkit (`@reduxjs/toolkit`) and `react-redux`.
- A `courses` slice is available at `store/slices/coursesSlice.js` and the store is in `store/store.js`.
- `pages/index.js` reads from the Redux store while still supporting the existing `useFetch` hook as a fallback.


Additional features added:
- Dual roles: Admin & Student (AuthContext)
- Admin can change password, create courses, create tests, upload resources (YouTube link or MP4/PDF uploaded to public/uploads)
- Student dashboard shows courses, tests, and can preview videos/PDFs.
