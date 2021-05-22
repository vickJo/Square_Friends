module.exports = {
  ...jest.requireActual("gatsby"),
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
