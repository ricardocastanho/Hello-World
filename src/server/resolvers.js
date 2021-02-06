const path = require('path')
const { mergeResolvers } = require('@graphql-tools/merge')
const { loadFiles } = require('@graphql-tools/load-files')

const buildResolvers = async () => {
  const resolversArray = await loadFiles(
    path.join(__dirname, '../resolvers/**/index.js')
  )

  return mergeResolvers(resolversArray)
}

module.exports = { buildResolvers }
