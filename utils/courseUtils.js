export const getCourseById = (courses, id) => {
    return courses.find((c) => c.id === id);
};

export const filterCourses = (courses, keyword) => {
    return courses.filter((course) =>
        course.title.toLowerCase().includes(keyword.toLowerCase())
    );
};
