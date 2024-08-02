const User = require("./db/user");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./db/user");


exports.signup = async(req, res, next, () => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return next(new createError("User already exists", 400))
        }
        const hashPass = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body, password: hashPass,
        });
    
const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
    expiresIn: '90d'
});

res.status(201).json({
    status: "success",
    message: "User registered Successfully",
    user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.password
    }


})} catch (error) {
    next(error)
}});


exports.login = async (req, res, next) => {
    try {
        const { email, password } = await req.body;

        const User = await User.findOne({ email });

        if (!user) return next(new createError("user not found", 400));

        const isPassValid = bcrypt.compare(password, user.password);

        if (!isPassValid) return next(new createError("Invalid user or password", 401))

        const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
            expiresIn: '90d'
        });
        res.status(200).json({
            status: "success", token,
            message: "Logged in successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.password
            }
        })

    } catch (error) {
        next(error)
    }
}