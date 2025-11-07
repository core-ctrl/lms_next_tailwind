module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[project]/Downloads/lms_next_tailwind (1)/context/AuthContext.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])();
// default admin stored in localStorage under 'lms_admin'
const DEFAULT_ADMIN = {
    email: 'admin@lms.com',
    password: 'admin123'
};
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // load auth
        try {
            const raw = localStorage.getItem('lms_auth');
            if (raw) {
                const a = JSON.parse(raw);
                setUser(a.user);
                setRole(a.role);
            }
            // ensure admin creds exist
            const adm = localStorage.getItem('lms_admin');
            if (!adm) localStorage.setItem('lms_admin', JSON.stringify(DEFAULT_ADMIN));
        } catch (e) {}
    }, []);
    function loginStudent(payload) {
        const auth = {
            role: 'student',
            user: payload
        };
        setUser(payload);
        setRole('student');
        localStorage.setItem('lms_auth', JSON.stringify(auth));
    }
    function loginAdmin(email, password) {
        try {
            const adm = JSON.parse(localStorage.getItem('lms_admin') || JSON.stringify(DEFAULT_ADMIN));
            if (email === adm.email && password === adm.password) {
                const auth = {
                    role: 'admin',
                    user: {
                        email
                    }
                };
                setUser({
                    email
                });
                setRole('admin');
                localStorage.setItem('lms_auth', JSON.stringify(auth));
                return {
                    ok: true
                };
            } else {
                return {
                    ok: false,
                    message: 'Invalid credentials'
                };
            }
        } catch (e) {
            return {
                ok: false,
                message: 'Error reading admin data'
            };
        }
    }
    function logout() {
        setUser(null);
        setRole(null);
        localStorage.removeItem('lms_auth');
    }
    function changeAdminPassword(newPass) {
        try {
            const adm = JSON.parse(localStorage.getItem('lms_admin') || JSON.stringify(DEFAULT_ADMIN));
            adm.password = newPass;
            localStorage.setItem('lms_admin', JSON.stringify(adm));
            return {
                ok: true
            };
        } catch (e) {
            return {
                ok: false
            };
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            role,
            loginStudent,
            loginAdmin,
            logout,
            changeAdminPassword
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/lms_next_tailwind (1)/context/AuthContext.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(AuthContext);
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$context$2f$AuthContext$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/context/AuthContext.jsx [ssr] (ecmascript)");
;
;
;
function Navbar() {
    const { user, role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$context$2f$AuthContext$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "bg-white border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-3 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-bold",
                            children: "LMS"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-slate-600 hover:text-slate-900",
                            children: "Courses"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        role === 'admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/dashboard",
                            className: "text-slate-600 hover:text-slate-900",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/student/dashboard",
                            className: "text-slate-600 hover:text-slate-900",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-slate-700",
                        children: [
                            "Hi, ",
                            user.name || user.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "px-3 py-1 bg-indigo-600 text-white rounded",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[externals]/react-redux [external] (react-redux, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-redux", () => require("react-redux"));

module.exports = mod;
}),
"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@reduxjs/toolkit", () => require("@reduxjs/toolkit"));

module.exports = mod;
}),
"[externals]/axios [external] (axios, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/Downloads/lms_next_tailwind (1)/store/slices/coursesSlice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "addCourseLocal",
    ()=>addCourseLocal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchCourses",
    ()=>fetchCourses
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const fetchCourses = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["createAsyncThunk"])('courses/fetch', async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get('/api/courses');
    return res.data;
});
const coursesSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["createSlice"])({
    name: 'courses',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addCourseLocal: (state, action)=>{
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCourses.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchCourses.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        }).addCase(fetchCourses.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});
const { addCourseLocal } = coursesSlice.actions;
const __TURBOPACK__default__export__ = coursesSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/lms_next_tailwind (1)/store/slices/testsSlice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTest",
    ()=>addTest,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setTests",
    ()=>setTests
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
;
const testsSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["createSlice"])({
    name: 'tests',
    initialState: {
        items: []
    },
    reducers: {
        setTests: (state, action)=>{
            state.items = action.payload;
        },
        addTest: (state, action)=>{
            state.items.push(action.payload);
        }
    }
});
const { setTests, addTest } = testsSlice.actions;
const __TURBOPACK__default__export__ = testsSlice.reducer;
}),
"[project]/Downloads/lms_next_tailwind (1)/store/store.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$coursesSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/store/slices/coursesSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$testsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/store/slices/testsSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$coursesSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$coursesSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["configureStore"])({
    reducer: {
        courses: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$coursesSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        tests: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$slices$2f$testsSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/lms_next_tailwind (1)/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$context$2f$AuthContext$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/context/AuthContext.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/components/Navbar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/store/store.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$store$2f$store$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$context$2f$AuthContext$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "flex-1 container mx-auto px-4 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                            ...pageProps
                        }, void 0, false, {
                            fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/_app.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d270e03d._.js.map