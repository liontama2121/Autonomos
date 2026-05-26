// AUTONOMOS — carrito persistente con localStorage
(function(){
  const KEY = 'autonomos_cart';

  function readCart(){
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e){
      return {};
    }
  }
  function writeCart(obj){
    try{ localStorage.setItem(KEY, JSON.stringify(obj)); } catch(e){}
  }

  window.addToCart = function(id, qty){
    qty = qty || 1;
    const cart = readCart();
    cart[id] = (cart[id] || 0) + qty;
    writeCart(cart);
    window.updateCartUI();
  };

  window.removeFromCart = function(id){
    const cart = readCart();
    delete cart[id];
    writeCart(cart);
    window.updateCartUI();
  };

  window.getCartCount = function(){
    const cart = readCart();
    return Object.values(cart).reduce((a,b) => a + b, 0);
  };

  window.getCartItems = function(){
    return readCart();
  };

  window.updateCartUI = function(){
    const n = window.getCartCount();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = n;
    });
  };
})();
