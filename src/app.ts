import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// === Middleware ==
app.use(express.json());

// === Routes ===
app.use('/tasks', taskRoutes);

// === Error handling middleware ===
app.use(errorHandler);

export default app;