// eslint-disable-next-line
const CopyText = (function () {
  let el
  
  const copy = function (str) {
    if (!el) {
      el = document.createElement('input')
      el.style.cssText = 'position:absolute;opacity:0;'
      el.setAttribute('type', 'hidden')
      document.body.appendChild(el)
    }
    el.value = str
    el.setAttribute('type', 'text')
    el.select()
    el.setSelectionRange(0, 9999) // For mobile devices

    try {
      document.execCommand('copy')
      return true
    } catch (e) {
      return false
    } finally {
      el.setAttribute('type', 'hidden')
    }
  }
  try {
    module.exports = copy
  } catch (e) { }

  return copy
})()
