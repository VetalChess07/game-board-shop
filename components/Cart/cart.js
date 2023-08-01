class Shopping {
  closeCart() {
    ROOT_СART.innerHTML = "";
    let body = document.querySelector(".body").classList.remove("no-sctoll");
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
         <tr>
            <td class='cart__table-name cart__table-item'>${name} </td>
            <td class='cart__table-price cart__table-item'>${price.toLocaleString()} </td>
         </tr>
         `;
        sumCatalog += price;
      }
    });

    const html = `
    <div class='cart__container'>
      <div class='cart__close'  onclick='cart.closeCart()'>
         <img class='cart__img' src='../../img/free-icon-delete-7990339.png' >
      </div>
         <table class='cart__table'>
            ${htmlCatalog}
         <tr>
            <td class='cart__table-sum cart__table-item'>${sumCatalog.toLocaleString()} </td>
         </tr>
         </table>
    </div> 
      `;

    ROOT_СART.innerHTML = html;
  }
}
const cart = new Shopping();
