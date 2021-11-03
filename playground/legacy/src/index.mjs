import mod from '../dist/index.cjs'

// NOTE: This light wrapper allows to import the module from ESM, while ensuring
// that problematic dependencies, such as Vite plugins that were transpiled
// incorrectly to ESM are always required as CJS.
export default mod.default
