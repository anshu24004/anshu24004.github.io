import './style.css';
import { products } from './src/data/products.js';

const app = document.getElementById('app');

function renderHome() {
    app.innerHTML = `
    <header>
      <div class="logo-container">
        <img src="/logo.png" alt="Cutesies Logo" class="logo-img">
      </div>
      <p class="site-tagline">Bake with your loved ones</p>
    </header>
    
    <div class="product-menu animate-up">
      <h2 style="text-align: center; margin-bottom: 2rem; font-weight: 800;">Our Delicious Products</h2>
      ${Object.values(products).map(product => `
        <a href="#/${product.id}" class="glass-card menu-item" style="border-left: 8px solid ${product.color}">
          <div>
            <div>${product.name}</div>
            <div style="font-size: 0.9rem; font-weight: 400; color: var(--color-text-light);">${product.tagline}</div>
          </div>
          <span>${product.heroImage}</span>
        </a>
      `).join('')}
    </div>
  `;
}

function renderProduct(productId) {
    const product = products[productId];
    if (!product) {
        location.hash = '';
        return;
    }

    app.innerHTML = `
    <a href="#" class="back-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Back to treats
    </a>

    <header class="animate-up">
      <div class="logo-container" style="width: 100px; margin-bottom: 0.5rem;">
        <img src="/logo.png" alt="Cutesies Logo" class="logo-img">
      </div>
      <p class="site-tagline" style="margin-bottom: 1rem;">Bake with your loved ones</p>
      <div class="product-header">
        <h1 class="product-title">${product.name}</h1>
        <p class="product-tagline">${product.tagline}</p>
      </div>
    </header>

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

    <div class="glass-card animate-up delay-3 feedback-section">
      <h2 class="section-title">
        <span style="font-size: 1.5rem;">✨</span> Your Feedback
      </h2>
      <p style="margin-bottom: 1.5rem; color: var(--color-text-light); font-size: 0.9rem;">
        We love to hear from our cute fans! Tell us what you think.
      </p>
      <iframe src="${product.feedbackUrl}" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  `;
}

function router() {
    const hash = location.hash;
    if (hash.startsWith('#/')) {
        const productId = hash.substring(2);
        renderProduct(productId);
    } else {
        renderHome();
    }
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
