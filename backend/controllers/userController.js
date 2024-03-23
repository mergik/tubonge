const User = require("../models/UserModel");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // find all users except current logged-in user
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    // const allUsers = await User.find(); // show all users including current user

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getUsersForSidebar;
