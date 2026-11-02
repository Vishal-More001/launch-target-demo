
const $=(s,c=document)=>c.querySelector(s); const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const toast=(m)=>{const t=$('#toast'); if(!t)return; t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};
$('.mobile-toggle')?.addEventListener('click',()=>$('.navlinks')?.classList.toggle('open'));
$('#debugToggle')?.addEventListener('click',()=>{document.body.classList.toggle('debug');localStorage.setItem('targetDebug',document.body.classList.contains('debug'))});
if(localStorage.getItem('targetDebug')==='true')document.body.classList.add('debug');
$$('[data-add-cart]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('cartCount',String((+localStorage.getItem('cartCount')||0)+1));updateCart();toast('Item added to cart. Conversion event recorded.');document.dispatchEvent(new CustomEvent('trendmart:addToCart',{detail:{sku:b.dataset.sku||'demo-sku'}}));}));
function updateCart(){const n=+localStorage.getItem('cartCount')||0;$$('[data-cart-count]').forEach(x=>x.textContent=n)} updateCart();
$$('[data-track]').forEach(x=>x.addEventListener('click',()=>document.dispatchEvent(new CustomEvent('trendmart:conversion',{detail:{event:x.dataset.track}}))));
$('#newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();toast('Thanks for subscribing!');e.target.reset()});
$('#checkoutForm')?.addEventListener('submit',e=>{e.preventDefault();location.href='thank-you.html'});
