export default function (el, binding) {
  binding.value
    ? el.classList.add('is-active')
    : el.classList.remove('is-active')
}
