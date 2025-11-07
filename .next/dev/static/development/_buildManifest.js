self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/admin/create-course": [
    "static/chunks/pages/admin/create-course.js"
  ],
  "/admin/create-test": [
    "static/chunks/pages/admin/create-test.js"
  ],
  "/admin/dashboard": [
    "static/chunks/pages/admin/dashboard.js"
  ],
  "/course/[id]": [
    "static/chunks/pages/course/[id].js"
  ],
  "/create": [
    "static/chunks/pages/create.js"
  ],
  "/login": [
    "static/chunks/pages/login.js"
  ],
  "/student/dashboard": [
    "static/chunks/pages/student/dashboard.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/admin/change-password",
    "/admin/create-course",
    "/admin/create-test",
    "/admin/dashboard",
    "/api/courses",
    "/api/upload",
    "/course/[id]",
    "/create",
    "/dashboard",
    "/login",
    "/student/dashboard"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()