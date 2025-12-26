import './style.css';
import { products } from './src/data/products.js';

const app = document.getElementById('app');

function renderProductContent(product) {
  return `
    <div class="product-content">
      <div class="glass-card animate-up delay-1">
        <h2 class="section-title">
          <span style="font-size: 1.5rem;">🍳</span> ${product.howToUse.title || 'How to Use'}
        </h2>
        ${Array.isArray(product.howToUse) 
          ? `<ol class="step-list">${product.howToUse.map(step => `<li>${step}</li>`).join('')}</ol>`
          : `
            ${product.howToUse.methods.map(method => `
              <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 1rem; color: var(--color-text);">${method.title}</h3>
                <ol class="step-list">
                  ${method.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
              </div>
            `).join('')}
            ${product.howToUse.tip ? `
              <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(33, 150, 243, 0.1); border-left: 4px solid #2196F3; border-radius: 8px;">
                <strong>ℹ️ Tip:</strong> <span style="color: var(--color-text);">${product.howToUse.tip}</span>
              </div>
            ` : ''}
            ${product.howToUse.tips ? product.howToUse.tips.map(tip => `
              <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255, 193, 7, 0.1); border-left: 4px solid #FFC107; border-radius: 8px;">
                <strong>${tip.title}</strong>
                <ul style="margin-top: 0.5rem; margin-left: 1.5rem; color: var(--color-text);">
                  ${tip.content.map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
                </ul>
              </div>
            `).join('') : ''}
            ${product.howToUse.note ? `
              <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(33, 150, 243, 0.1); border-left: 4px solid #2196F3; border-radius: 8px;">
                <strong>ℹ️ Note:</strong> <span style="color: var(--color-text);">${product.howToUse.note}</span>
              </div>
            ` : ''}
          `
        }
      </div>

      <div class="glass-card animate-up delay-2">
        <h2 class="section-title">
          <span style="font-size: 1.5rem;">🌿</span> Ingredients
        </h2>
        <div class="ingredient-tags">
          ${product.ingredients.map(ing => `<span class="tag">${ing}</span>`).join('')}
        </div>
        ${product.allergens ? `<p class="allergen-info" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.1); color: var(--color-text-light); font-size: 0.9rem; font-weight: 600;">${product.allergens}</p>` : ''}
        <p class="ingredient-note" style="margin-top: 1rem; padding: 1rem; background: rgba(255, 193, 7, 0.1); border-left: 4px solid #FFC107; border-radius: 8px; color: var(--color-text); font-size: 0.9rem; line-height: 1.6;">
          <strong>*Note:</strong> The product may contain egg. Be mindful of the food-sign on the package whether it's green or brown.
        </p>
      </div>
    </div>
  `;
}

function renderProductSection(product, index) {
  return `
    <div id="${product.id}" class="product-section" style="margin-bottom: 2rem; scroll-margin-top: 2rem;">
      <div class="product-expandable glass-card" style="border-left: 8px solid ${product.color};">
        <button class="product-toggle" data-product-id="${product.id}" aria-expanded="false">
          <div class="product-header-content">
            <div>
              <h2 class="product-title" style="font-size: 1.8rem; margin: 0; margin-bottom: 0.5rem;">${product.name}</h2>
              <p class="product-tagline" style="margin: 0; color: var(--color-text-light);">${product.tagline}</p>
            </div>
            <span class="toggle-icon" style="font-size: 1.5rem; transition: transform 0.3s ease;">▼</span>
          </div>
        </button>
        <div class="product-expandable-content" style="display: none; padding-top: 2rem;">
          ${renderProductContent(product)}
        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  app.innerHTML = `
    <header class="animate-up">
      <div class="logo-container">
        <img src="/logo.png" alt="Cutesies Logo" class="logo-img">
      </div>
      <p class="site-tagline">Bake with your loved ones</p>
    </header>
    
    <div class="products-container">
      ${Object.values(products).map((product, index) => renderProductSection(product, index)).join('')}
    </div>

    <div class="glass-card animate-up delay-3 feedback-section" style="margin-top: 4rem;">
      <h2 class="section-title">
        <span style="font-size: 1.5rem;">✨</span> Your Feedback
      </h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-text-light); font-size: 0.9rem;">
        We love to hear from our cute fans! Tell us what you think.
      </p>
      <iframe src="${Object.values(products)[0].feedbackUrl}" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  `;
  
  // Initialize expandable functionality
  initializeExpandables();
}

function initializeExpandables() {
  const toggles = document.querySelectorAll('.product-toggle');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const productId = toggle.getAttribute('data-product-id');
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.toggle-icon');
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        content.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.display = 'block';
        toggle.setAttribute('aria-expanded', 'true');
        icon.style.transform = 'rotate(180deg)';
        
        // Smooth scroll to the expanded section
        setTimeout(() => {
          toggle.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });
}

// Initialize the app
renderApp();

// Handle anchor links for smooth scrolling to product sections
function handleAnchorScroll() {
  const hash = window.location.hash;
  if (hash) {
    const productId = hash.substring(1);
    const element = document.getElementById(productId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Auto-expand the product if it's collapsed
        const toggle = element.querySelector('.product-toggle');
        if (toggle && toggle.getAttribute('aria-expanded') === 'false') {
          toggle.click();
        }
      }, 100);
    }
  }
}

// Smooth scroll on page load if hash exists
window.addEventListener('load', handleAnchorScroll);
// Smooth scroll on hash change (for browser back/forward)
window.addEventListener('hashchange', handleAnchorScroll);
