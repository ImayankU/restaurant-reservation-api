import app from "./app.js"; // or wherever your app.js file is located

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
