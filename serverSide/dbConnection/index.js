import mongoose from "mongoose";

const URL = 'mongodb+srv://akhilesh:12345@cluster0.j8nvgc6.mongodb.net/?retryWrites=true&w=majority';

const connectiondb = () => {
  return mongoose.connect(URL);
};

export default connectiondb;