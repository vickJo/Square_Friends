const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            toString,
            ...rest
        }) => React.createElement("a", { ...rest, href: to, })
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn(),
}
