function active (el, binding) {
  binding.value
    ? el.classList.add('is-active')
    : el.classList.remove('is-active')
}

function klass (el, binding) {
  if (binding.arg) {
    binding.value
      ? el.classList.add(binding.arg)
      : el.classList.remove(binding.arg)
  } else {
    binding.value
      ? el.classList.add(binding.value)
      : el.classList.remove(binding.value)
  }
}

function style (el, binding) {
  el.style[binding.arg] = binding.value
}

export default {
  install (Vue) {
    Vue.directive('class', klass)
    Vue.directive('active', active)
    Vue.directive('style', style)
  }
}
