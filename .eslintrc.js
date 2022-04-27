module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
};
