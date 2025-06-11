const fs = require("fs");
const path = require("path");
const Employee = require("../models/Employee");

const index = async (req, res) => {
  let employees = await Employee.find();
  return res.render("index", { employees });
};

const create = (req, res) => {
  return res.render("create");
};
const store = async (req, res) => {
  //   let emp = new Employee({
  //     name: req.body.name,
  //     email: req.body.email,
  //     phone: req.body.phone,
  // //   });
  //   await emp.save();

  await Employee.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.path.replace("public", ""),
  });

  return res.redirect("/");
};

const edit = async (req, res) => {
  let id = req.params.id;
  let employee = await Employee.findById(id);

  return res.render("edit", { employee });
};
const update = async (req, res) => {
  if (req.file) {

    if(fs.existsSync(path.join(__dirname, "../public", req.body.prev_path)))
    fs.unlinkSync(path.join(__dirname, "../public", req.body.prev_path));
    await Employee.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.path.replace("public", ""),
      }
    );
  } else {
    await Employee.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      }
    );
  }

  return res.redirect("/");
};

const deleteEmployee = async (req, res) => {
  await Employee.deleteOne({ _id: req.params.id });

  return res.redirect("/");
};

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  deleteEmployee,
};
