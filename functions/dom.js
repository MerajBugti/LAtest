export function elementInViewport(el, contEl) {
  if (el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return top < contEl.pageYOffset + contEl.innerHeight;
  }
}
