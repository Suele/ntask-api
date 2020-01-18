import User from './user';
import encrypted from './encrypted';

const checksUser = async (req, res) => {
  req.body.password = await encrypted(req.body.password);

  try {
    const user = User.create(req.body);
    user.then(userData => {
      res.status(201).json({ message: 'Created User.', userData });
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const authenticationUser = (req, res) => {
  const user = User.findOne(req.body).select('+password');

  user
    .then(authUser => {
      return res.status(200).json({ message: 'Welcome', user: authUser.email });
    })
    .catch(() => {
      return res.status(400).json({
        errorMessage: 'email or password not register.'
      });
    });
};

export default {
  checksUser,
  authenticationUser
};
