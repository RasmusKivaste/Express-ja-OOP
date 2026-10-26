import express from 'express';
import todoRoutes from './routes/todos.js';

const app = express();
app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(3009, () => {
    console.log('Server is running on port 3009');
});