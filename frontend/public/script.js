document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navLinks');

  function changeLinkState() {
    let index = sections.length;

    // Ensure that we have sections and navLinks
    if (sections.length === 0 || navLinks.length === 0) {
      return;
    }

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    // Clear active class from all nav links
    navLinks.forEach((link) => link.classList.remove('navLinks-active'));

    // Check if index is within the range of navLinks NodeList
    if (index >= 0 && index < navLinks.length) {
      navLinks[index].classList.add('navLinks-active');
    }
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);
});
