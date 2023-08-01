let counter = 0;

class Products {
  constructor() {
    this.classNameActive = "products__item-btn_active";
    this.labelApp = "Добавить в коризну";
    this.labelRemove = "Удалить из коризны";
  }
  handleLocalStorageClick(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);

    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelApp;
    }
    headerPage.render(products.length);
  }

  handleClickPlus(id, counter) {
    const btnPlus = document.querySelector(".products__item-btn-plus");

    btnPlus.addEventListener("click", function () {
      console.log("ff");
      console.log(counter);

      if (parseInt(counter.innerText)) {
        counter.innerText = ++counter.innerText;
      }
    });
  }

  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelApp;
      } else {
        activeText = this.labelRemove;
        activeClass = " " + this.classNameActive;
      }

      htmlCatalog += `
      <li class='products__item'>
         <h2 class='products__item-title'>${name}</h2>
         <img class='products__item-img' src='${img}'>
         <div class='products__item-container'>
          <span class='products__item-price' >${price}</span>
          <span class='products__item-price' >кол-во ${counter} шт</span>
         </div>
         <div class='products__item-container'>
         <button class='products__item-btn-minus'> - </button>
         <button class='products__item-btn ${activeClass}' onclick="productsPage.handleLocalStorageClick(this, '${id}');">
         ${activeText}
         </button>
         <button class='products__item-btn-plus' onclick='productsPage.handleClickPlus(this, "${id}");'> + </button>
         </div>
      </li>
      `;
    });

    const html = `
    <ul class='products__container'>
    ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();

// {movies.map((movie) => { if (!movie.overview || !movie.poster_path) {return null;}
