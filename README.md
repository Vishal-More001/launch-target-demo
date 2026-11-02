# TrendMart Adobe Target Practice Website

A responsive, static, multi-page e-commerce template designed for Adobe Target practice.

## Run locally

Because the site uses relative links, you can open `index.html` directly. A local server is better:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Adobe Tags / Web SDK

Add your Adobe Tags development embed code in the `<head>` of every HTML page at the marked comment. Publish the library to Development before testing.

## Target zones

Click **Show Target zones** at the lower-right of any page. Each experiment area has:

- A stable HTML `id`
- `class="target-zone"`
- A readable `data-target-zone` value

Important zones include `hero-banner`, `promo-bar`, `featured-products`, `product-grid`, `pdp-description`, `add-to-cart-section`, `related-products`, `cart-promotion`, `checkout-cta`, `checkout-form`, and `checkout-trust`.

## Conversion events

The JavaScript dispatches demo browser events:

- `trendmart:conversion`
- `trendmart:addToCart`

Use Adobe Tags rules to listen for these custom events and send the appropriate Web SDK event. Page destinations can also be used as goals:

- `product.html`: product view
- `cart.html`: cart view
- `checkout.html`: checkout start
- `thank-you.html`: order confirmation

## Suggested experiments

1. Hero offer: 40% off vs free shipping.
2. Hero CTA: Shop now vs Explore deals.
3. PDP CTA color and wording.
4. PLP filter position and default sort.
5. Cart shipping-threshold message.
6. Checkout full form vs simplified form.
7. New vs returning visitor messaging.
8. Country, device, or traffic-source personalization.
9. Product and article recommendations.
10. Multivariate test using hero headline plus CTA.

This is a training template. Product data and checkout behavior are simulated.
