// ========================================================
//             DESIGN SYSTEM v1.0.0 - SCRIPT.JS
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===================== NAVIGATION =====================
  const navButtons = document.querySelectorAll('#nav button');
  const sections = document.querySelectorAll('.section');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all buttons
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));

      // Show target section
      const targetId = button.dataset.section;
      const targetSection = targetId ? document.getElementById(targetId) : null;
      
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Close mobile menu on small screens
      if (window.innerWidth <= 900) {
        closeMobileMenu();
      }
    });
  });


  // ===================== MOBILE MENU =====================
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function closeMobileMenu() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  }

  function toggleMobileMenu() {
    const isOpen = sidebar.classList.toggle('open');
    overlay?.classList.toggle('open', isOpen);
  }

  hamburger?.addEventListener('click', toggleMobileMenu);
  overlay?.addEventListener('click', closeMobileMenu);


  // ===================== COPY TO CLIPBOARD =====================
  window.copyToClipboard = function(text, element = null) {
    let content = text;

    if (element) {
      const codeBlock = element.closest('.code-block');
      if (codeBlock) {
        const pre = codeBlock.querySelector('pre');
        if (pre) content = pre.textContent.trim();
      }
    }

    navigator.clipboard.writeText(content).then(() => {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = "✓ Copied to clipboard";
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
      }
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };


  // ===================== SUBMIT BUTTON FEEDBACK =====================
  const submitBtn = document.querySelector('button[data-submit-feedback]');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const originalText = submitBtn.textContent;
      const originalBg = submitBtn.style.backgroundColor;

      submitBtn.textContent = "SUBMITTED ✓";
      submitBtn.style.backgroundColor = '#22c55e';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = originalBg;
      }, 2000);
    });
  }

  
  // ===================== INITIALIZATION =====================
  const firstSection = document.getElementById('colors');
  if (firstSection) firstSection.classList.add('active');

  console.log('%c✅ Design System v1.0.0 - Fully Loaded', 
    'color:#00ff88; font-family:monospace; font-size:14px; font-weight:500;');
});