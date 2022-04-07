import mongoose from 'mongoose';

const CourseContentModel = mongoose
                .model('CourseContent',new mongoose.Schema({
                    id: String,
                    courseID: String,
                    language: String,
                    title: String,
                    intro: String,
                    code: String,
                    video: String,
                    conclusion: String
                },{collection: 'CoursesContent'}));

export default CourseContentModel;