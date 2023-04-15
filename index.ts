import express from 'express';
import cors from 'cors';

import router from './src/router';

const PORT = 7070;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
