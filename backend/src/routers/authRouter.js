const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  // const r = await User.findAll({ include: { model: User, as: 'friends' } });

  // r.forEach((el) => {
  //   console.dir(el.get({ plain: true }), { depth: null });
  // });
  res.json(req.session.user || null);
});

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = (
      await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      })
    ).get();
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    req.session.user = user;
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Ошибка авторизации пользователя",
      error: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { password, email } = req.body;

    const finder = {};
    if (email) {
      finder.email = email;
    }

    const user = await User.findOne({
      where: finder,
      attributes: [
        "id",
        "firstName",
        "lastName",
        "username",
        "email",
        "password",
      ],
      raw: true,
    });
    if (!user) {
      return res.status(401).json({ message: "Try again" });
    }
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      delete user.password;
      req.session.user = user;
      return res.json(user);
    }

    return res.json(null);
  } catch (error) {
    return res.status(400).json({
      message: "Ошибка регистрации нового пользователя",
      error: error.message,
    });
  }
});

router.get("/signout", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("forum");
    res.status(200).json({ message: "Сессия была удалена!" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Ошибка удаления сессии", error: error.message });
  }
});

module.exports = router;
