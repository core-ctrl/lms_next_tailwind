module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseDetail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/lms_next_tailwind (1)/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function CourseDetail() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$lms_next_tailwind__$28$1$292f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const courses = JSON.parse(localStorage.getItem('lms_courses') || '[]');
        if (id) {
            const foundCourse = courses.find((c)=>String(c.id) === String(id));
            setCourse(foundCourse);
        }
    }, [
        id
    ]);
    // ✅ Helper function to handle all YouTube link types
    function convertYouTubeUrl(url) {
        try {
            if (url.includes('watch?v=')) {
                return url.replace('watch?v=', 'embed/');
            } else if (url.includes('youtu.be/')) {
                const id = url.split('youtu.be/')[1];
                return `https://www.youtube.com/embed/${id}`;
            } else {
                return url;
            }
        } catch  {
            return url;
        }
    }
    if (!course) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: "Course not found."
    }, void 0, false, {
        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
        lineNumber: 33,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-2",
                children: course.title
            }, void 0, false, {
                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-slate-600 mb-4",
                children: course.description
            }, void 0, false, {
                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            course.resources && course.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-semibold mb-2",
                        children: "Resources"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: course.resources.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white p-3 rounded shadow",
                                children: [
                                    r.type === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "aspect-w-16 aspect-h-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                                            width: "560",
                                            height: "315",
                                            src: convertYouTubeUrl(r.src),
                                            title: "YouTube video",
                                            frameBorder: "0",
                                            allowFullScreen: true
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this),
                                    r.type === 'mp4' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                                        controls: true,
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                src: r.src,
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this),
                                            "Your browser does not support the video tag."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this),
                                    r.type === 'pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: r.src,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-indigo-600 underline",
                                        children: "Open PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/lms_next_tailwind (1)/pages/course/[id].js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdc03bf9._.js.map