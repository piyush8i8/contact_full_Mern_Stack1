const router = require("express").Router();
const model= require("./Schemamodel")
router.post("/post", async(req,res)=>{
    try{
        console.log(req.body); // Add this line to log the request body

        const { firstname, lastname, company, email, phonenumber, message } = req.body;

        if (!firstname || !lastname || !company || !email || !phonenumber || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newcontact = new model({ firstname, lastname, company, email, phonenumber, message });
        await newcontact.save();
        res.status(200).json({ message: "Data saved successfully" });
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(400).json({ message: "Data not saved", error: err.message });
    }
});

module.exports= router;

