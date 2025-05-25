const express= require("express")
const connectDB=require("./db.js")
const authRoutes=require("./routes/auth");
const orderRoutes = require("./routes/orders");
const checkoutRoutes = require("./routes/checkout");


require('dotenv').config();

const app=express()
app.use(express.json())

app.use("/api/auth",authRoutes)  
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);



const PORT = process.env.PORT || 5000;

connectDB()

app.listen(PORT, () => {
  console.log(`✅ Sunucu çalışıyor: http://localhost:${PORT}`);
});