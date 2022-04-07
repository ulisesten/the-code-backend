

function notFound(err) {
    console.log('[ERROR]getAllCourses:', err);
    this.statusCode = 404;
    this.type('text/plain')
    this.send("404 Not found");
}


export {notFound};