import React from "react";

export default function Root(props) {
  return (
    <section>
      <button
        onClick={() => {
          window.pdp.cart.addToCart();
        }}
      >
        Add to cart
      </button>
    </section>
  );
}
