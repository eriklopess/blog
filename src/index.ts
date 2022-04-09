import App from './App';
import 'dotenv/config';

const app = new App();

const PORT = Number(process.env.PORT as string);

app.listen(PORT);
