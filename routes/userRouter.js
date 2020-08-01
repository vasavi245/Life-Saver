const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    let { email, bloodGroup, suburb, gender, age, fullName, password, passwordCheck } = req.body;

    // validate

    if (!email || !fullName || !age ||!gender ||!bloodGroup ||!suburb ||!password ||!passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
   

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    if (!fullName) fullName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      fullName,
      age,
      bloodGroup,
      suburb,
      gender,
      isAdmin: false,

      
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    fullName: user.fullName,
    id: user._id,
  });
});

router.get("/donors", auth, async(req, res) => {
  const users = await User.find({}).select('-password');
  res.json({users});
  console.log(res.json);
});


router.get("/createadmin", auth, async(req, res) => {
  console.log(isAdmin)
  try {
    const user = new User({
      name: "Admin-Lifesaver",
      email: "admin@lifesaver.com",
      password: "admin-lifesaver",
      isAdmin: true,
    
    })
const newUser = await user.save();
res.json(newUser);
  }catch(err) {
      res.json({message: err});
  }
});
module.exports = router;