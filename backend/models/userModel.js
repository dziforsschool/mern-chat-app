const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pfp: { type: String, required: true, default: "https://a.ppy.sh/11045074" }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
