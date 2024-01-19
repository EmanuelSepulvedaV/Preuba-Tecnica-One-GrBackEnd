const {createNewUser} = require("../user.module/sevice.user")

module.exports = {
    createNewUser: async (req, res) => {
        try {
          const state = await createNewUser(req.body);
          res.status(200).json(state);
        } catch (error) {
          console.log("Erorr al crear el usuario:", error.message);
          res.status(error.codeStatus).json(error);
        }
      },
};
