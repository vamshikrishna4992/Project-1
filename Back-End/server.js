import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/contact.js';
import cors from 'cors';


dotenv.config();  // Load environment variables before using them

const App = express();
App.use(express.json());
connectDB();
App.use(cors())
 App.use('/', userRoutes);

const PORT = process.env.PORT || 3000;  // Fallback in case PORT is undefined

App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
