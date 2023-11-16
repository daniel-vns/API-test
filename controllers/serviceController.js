const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      };
      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: "Service created successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
