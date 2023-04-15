import express from 'express';
import router from './src/router';

const PORT = 7070;
const app = express();

app.use('/', router);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));