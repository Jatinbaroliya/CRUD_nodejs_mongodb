import express from 'express';
import userRoutes from './routes/user.js';
import connectDB from './connection.js';
import logReqRes from './middlewares/index.js';


const app = express();
const PORT = 3000;

//mongo connection
connectDB(`mongodb+srv://CRUD:crud123@cluster0.ddoxc5b.mongodb.net/`).then(() => {
    console.log('✅ MongoDB connected');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logReqRes('logs.txt'));

//routers
app.use('/api/user', userRoutes);

//server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});