const express= require("express")
const connectDB=require("./db.js")
const authRoutes=require("./routes/auth");

require('dotenv').config();

const app=express()
app.use(express.json())
app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 5000;

connectDB()

app.listen(PORT, () => {
  console.log(`✅ Sunucu çalışıyor: http://localhost:${PORT}`);
});