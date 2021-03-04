exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/\/404\//)) {
        page.context.layout = "base"
        actions.createPage(page)
    }
}
