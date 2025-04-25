const app = require("./index.js");
const connectDB = require("./utils/database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on PORT: ${PORT}`);
});