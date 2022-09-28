import mongoose from 'mongoose';

const CourseContentModel = mongoose
                .model('CourseContent',new mongoose.Schema({
                    id: { type: String, unique: true},
                    courseID: {type: String, required: true },
                    language: String,
                    title: { type: String, required: true },
                    intro: String,
                    code: String,
                    video: String,
                    conclusion: String,
                    content: { type: String, required: true}
                },{collection: 'CoursesContent'}));

export default CourseContentModel;