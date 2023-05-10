module.exports = {
  name: 'generate:component',
  description: 'Create new component insite src/components',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error },
    } = toolbox

    if (!parameters.first) {
      error('Component name must be specified!')
      return
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `src/components/${parameters.first}/index.js`,
      props: { name: parameters.first },
    })

    await template.generate({
      template: 'styles.js.ejs',
      target: `src/components/${parameters.first}/styles.js`,
    })

    success(`Generated ${parameters.first} component.`)
  },
}
