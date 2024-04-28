
import dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
dotenv.config();


// we will add cloudinary configuration here soon

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  connectDB();
});


