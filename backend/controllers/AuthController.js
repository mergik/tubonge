const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

// Register a new user
const register = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword, gender } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // check if user & email exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar.iran.liara.run/public/boy
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const otherProfilePic = `https://avatar.iran.liara.run/username?username=${username}`;

    // Create a new user
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic:
        gender === "male"
          ? maleProfilePic
          : gender === "female"
          ? femaleProfilePic
          : otherProfilePic,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });

    //res.send("signup");
    console.log("signup");
  } catch (error) {
    console.error("Error in SignUp controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login a user
const login = async (req, res) => {
  try{
    const { username, password } = req.body

    const user = await User.findOne({ username })
    const passwordComparison = await bcrypt.compare(password, user?.password || "")

    if(!user || !passwordComparison){
      res.status(400).json({error: 'Invalid username or password!'})
    }

    else {
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic
      })
    }
  }catch(error){
    console.log('Error encountered during login!', error.message)
    res.status(500).json({error: "internal server error!"})
  }
};

// logout a user
const logout = async (req, res) => {
  res.send("logout");
  console.log("logout");
};

module.exports = { register, login, logout };
