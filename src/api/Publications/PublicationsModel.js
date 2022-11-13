import mongoose from 'mongoose';

const PublicationsModel = mongoose
                .model('CourseContent',new mongoose.Schema({
                    id: { type: String, unique: true},
                    userid: {type: String, required: true },  
                    content: { type: String, required: true}
                },{collection: 'CoursesContent'}));

export default PublicationsModel;