import mongoose from 'mongoose';

const SyllabusModel = mongoose
                .model('Syllabus',new mongoose.Schema({
                    id: String,
                    title: String,
                    courseID: String,
                    timestamp: String,
                },{collection: 'Syllabuses'}));

export default SyllabusModel;