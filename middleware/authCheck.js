const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
            if (err) {
                return res.status(500).json({
                    success: "false",
                    mssg: "Auth method",
                })
            }
            req.body.userID = decode.userID;
            next();
        });
    } catch (e) {
        console.log(`token error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to verify token",
            e
        })
    }
}
