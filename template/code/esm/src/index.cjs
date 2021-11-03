// NOTE: This light wrapper allows to import the module from a CJS application
// without worrying about ESM/CJS incompatibilities, while allowing îles to
// automatically import it as ESM if the user specifies the module as a string.
module.exports = (...args) => new Promise((resolve, reject) => {
  import('../dist/index.js')
    .then(m => resolve(m.default(...args)))
    .catch(reject)
})
