class Header {
  openCart() {
    cart.render();
    let body = document.querySelector(".body").classList.add("no-sctoll");
  }

  render(count) {
    const html = `
      <div class='header__container'>
         <div class='header__item'>
            <img onclick='headerPage.openCart()' class='header__img' src='../../img/free-icon-shopping-cart-of-checkered-design-34627.png'>
            <span class='header__counter-text'> ${count} <span>
         </div >
      </div>
      `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
