
const User = require("../models/userModel");
const router = require("express").Router();

router.get("/", async(req, res) => {
    try {
const donors = await User.find().exec();
  res.json(donors)
    }catch(err) {
        res.json({message: err});
    }
});

router.post('/donorpage', async(req,res) => {
    console.log(req.body);
   const newDonor = new User({
       name: req.body.name,
       regEmail: req.body.regEmail,
       age: req.body.age,
       bloodGroup: req.body.bloodGroup,
       suburb: req.body.suburb,
       isDonor: true,
   });
   try {
       const savedDonor = await newDonor.save();
       console.log(savedDonor);
       res.json(savedDonor)
       
   }
   catch(err){
        console.log(err);
       res.json({message: err})
      
   }
   if (!/\b\w+\@\w+\.\w+(?:\.\w+)?\b/.test(regEmail)) {
   return res
   .status(500)
   .json({ success: false, data: "Enter valid email address"})
} else if (age < 18 || age > 50 ) {
    return res.status(500).json({
        success: false,
        data: "To Become a registered donor you must be aged between 18 and 50"
    })
}

    });

    router.delete("/delete", async (req, res) => {
        try {
          const deletedDonor = await User.findByIdAndDelete(req.user);
          res.json(deletedDonor);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });



module.exports = router;


