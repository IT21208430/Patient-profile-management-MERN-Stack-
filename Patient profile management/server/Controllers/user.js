// const User = require('../models/user');

// // Get current user
// exports.getCurrentUser = async (req, res) => {
//   try {
//     const user = await PatientSchema.findById(req.user.id).select('-Password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to get current user' });
//   }
// };