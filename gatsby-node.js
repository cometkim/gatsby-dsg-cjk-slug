exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/한글-URL/",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
