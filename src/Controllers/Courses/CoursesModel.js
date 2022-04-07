import mongoose from 'mongoose';

const CourseModel = mongoose
                .model('Course',new mongoose.Schema({
                    id: String,
                    name: String,
                    lang: String,
                    timestamp: String,
                },{collection: 'Courses'}));

export default CourseModel;