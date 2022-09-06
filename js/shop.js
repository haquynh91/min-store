// $(".filter-mobile").hide();
// $(".filter-mobile-content").hide();
// @media (min-width: 768px) {
//   $(".filter-mobile").show();
//   $("#filer").hide();
//   $("#filer-detail").hide();
// };
// $(function () {
// $(".filter-mobile").click(function () {
// $(".filer-mobile-content").show();
// }
// $(function () {
//   $("#doll").click(function () {
//     $(".product-type").show();
//     $("#panelsStayOpen-collapseThree #doll").show();
//   });
// });

//Render Product
// function renderPagination() {
//   for (let i = 1; i <= totalPage; i++) {
//     document.getElementById(
//       "page-number"
//     ).innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="selectPage(${i})">${i}</a></li>`;
//   }
// }
// function selectPage(p) {
//   currentPage = p;
//   renderCurrentPage();
// }
// function prevPage() {
//   currentPage--;
//   renderCurrentPage();
// }
// function nextPage() {
//   currentPage++;
//   renderCurrentPage();
// }
// function getFirstItem() {
//   return (currentPage - 1) * totalPerPage;
// }
// function renderCurrentPage() {
//   const tempProducts = [];
//   const arr = [];
//   const startPoint = getFirstItem();
//   const endPoint = startPoint + totalPerPage;

//   for (let j = getFirstItem(); j < products.length; j++) {
//     if (endPoint <= products.length) {
//       document.getElementById("results").innerHTML = `Showing ${
//         startPoint + 1
//       } - ${endPoint} of ${products.length} results`;
//     } else
//       document.getElementById("results").innerHTML = `Showing ${
//         startPoint + 1
//       } - ${products.length} of ${products.length} results`;

//     if (arr.length >= totalPerPage) {
//       break;
//     }
//     const product = products[j];
//     arr.push(
//       `<div class="col-12 col-sm-6 col-md-4 product-item relative">
//             <div class="product-img">
//                 <a href=""><img src="${product.productImg}" alt="" /></a>
//             </div>
//             <div class="sale-off absolute">${product.salePercentage}%</div>
//             <div class="product-name">${product.productName}</div>
//             <span class="original-price">$${product.originalPrice}</span>
//             <span class="discount-price">$${product.discountPrice}</span>
//             <a href="#" class="btn btn-outline-primary btn-in-card">Add to Cart</a>
//         </div>`
//     );
//   }
//   document.getElementById("render").innerHTML = ``;
//   document.getElementById("render").innerHTML = arr.join("");
// }

// var totalPerPage = 12;
// var totalPage = Math.ceil(products.length / totalPerPage);
// renderPagination();
// var currentPage = 1;
// renderCurrentPage();

//get value checkbox
// const tempProducts = [];
// const totalPerPage = 12;

// $(".form-check-input").change(function (event) {
//   // console.log(event);
//   const discountChecked = $('input[type="checkbox"][name="discount"]:checked');
//   const discountCondition = [];

//   for (let i = 0; i < discountChecked.length; i++) {
//     discountCondition.push(discountChecked[i].value);
//   }
//   console.log(`condition ${discountCondition}`);
//   tempProducts.length = 0;
//   for (let j = 0; j <= discountCondition.length; j++) {
//     for (let p = 0; p < products.length; p++) {
//       if (products[p].salePercentage == discountCondition[j]) {
//         tempProducts.push(products[p]);
//       }
//     }
//   }
//   console.log(tempProducts); //Da console log duoc ra 1 mang tempProducts gom 13 products
//   renderPagination();
//   renderCurrentPage();
// });
// //Render tempProducts

// function renderPagination() {
//   var totalPage = Math.ceil(tempProducts.length / totalPerPage); //Loi: uncaught Ref Error: temProducts is not defined??
//   document.getElementById("page-number").innerHTML = "";
//   for (let i = 1; i <= totalPage; i++) {
//     document.getElementById(
//       "page-number"
//     ).innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="selectPage(${i})">${i}</a></li>`;
//   }
// }
// function selectPage(p) {
//   currentPage = p;
//   renderCurrentPage();
// }
// function prevPage() {
//   currentPage--;
//   renderCurrentPage();
// }
// function nextPage() {
//   currentPage++;
//   renderCurrentPage();
// }
// function getFirstItem() {
//   return (currentPage - 1) * totalPerPage;
// }
// function renderCurrentPage() {
//   const arr = [];
//   const startPoint = getFirstItem();
//   const endPoint = startPoint + totalPerPage;

//   for (let j = getFirstItem(); j < tempProducts.length; j++) {
//     if (endPoint <= tempProducts.length) {
//       document.getElementById("results").innerHTML = `Showing ${
//         startPoint + 1
//       } - ${endPoint} of ${tempProducts.length} results`;
//     } else {
//       document.getElementById("results").innerHTML = `Showing ${
//         startPoint + 1
//       } - ${tempProducts.length} of ${tempProducts.length} results`;
//     }

//     if (arr.length >= totalPerPage) {
//       break;
//     }
//     const product = tempProducts[j];
//     const finalPrice =
//       product.originalPrice * (1 - product.salePercentage / 100);
//     arr.push(
//       `<div class="col-12 col-sm-6 col-md-4 product-item relative">
//             <div class="product-img">
//                 <a href=""><img src="${product.productImg}" alt="" /></a>
//             </div>
//             <div class="sale-off absolute">${product.salePercentage}%</div>
//             <div class="product-name">${product.productName}</div>
//             <span class="original-price">$${product.originalPrice.toFixed(
//               2
//             )}</span>
//             <span class="discount-price">$${finalPrice.toFixed(2)}</span>
//             <a href="#" class="btn btn-outline-primary btn-in-card">Add to Cart</a>
//         </div>`
//     );
//   }
//   document.getElementById("render").innerHTML = ``;
//   document.getElementById("render").innerHTML = arr.join("");
// }
// var currentPage = 1;
// renderCurrentPage();

/**
 * START
 */
var useFilter = false;
var currentPage = 1;
const totalPerPage = 12;
var totalPage = 1;

function renderProduct() {
  /**
   * 1. get list product = filterProducts();
   *
   * 2. draw
   *
   * 2.1 draw content
   *
   * 2.2 draw page result
   *
   * 2.3 draw pagination
   *
   */
  const displayedProds = getDisplayedProducts();
  const firstElementOfPage = getFirstElementOfPage();

  //draw content
  const displayedHtmlElemt = [];
  for (let j = firstElementOfPage; j < displayedProds.length; j++) {
    if (displayedHtmlElemt.length >= totalPerPage) {
      break;
    }
    const product = displayedProds[j];
    const finalPrice =
      product.originalPrice * (1 - product.salePercentage / 100);
    displayedHtmlElemt.push(`
    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
      <div class="product-item relative">
          <div class="product-img">
              <a href=""><img src="${product.productImg}" alt="" /></a>
          </div>
          <div class="sale-off absolute">${product.salePercentage}%</div>
          <div class="product-name">${product.productName}</div>
          <span class="original-price">$${product.originalPrice}</span>
          <span class="discount-price">$${finalPrice.toFixed(2)}</span>
          <button class="btn btn-outline-primary btn-in-card">Add to Cart</button>
      </div>
      </div>`);
    
    console.log(displayedProds);
  }
  document.getElementById("render").innerHTML = ``;
  document.getElementById("render").innerHTML = displayedHtmlElemt.join("");

  //draw page result
  var lastElementOfPage = firstElementOfPage + displayedHtmlElemt.length;
  const pageResult = `Showing ${
    firstElementOfPage + 1
  } - ${lastElementOfPage} of ${displayedProds.length} results`;
  document.getElementById("results").innerHTML = pageResult;

  //draw pagination
  const displayedPageElem = [];
  totalPage = Math.ceil(displayedProds.length / totalPerPage);
  for (let i = 1; i <= totalPage; i++) {
    displayedPageElem.push(`
    <li class="page-item">
      <a class="page-link" href="#" onclick="selectPage(${i})">${i}</a>
    </li>`);
  }
  document.getElementById("page-number").innerHTML = "";
  document.getElementById("page-number").innerHTML = displayedPageElem.join("");
}

function prevPage() {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
    return;
  }
  renderProduct();
}

function nextPage() {
  currentPage++;
  if (currentPage > totalPage) {
    currentPage = totalPage;
    return;
  }
  renderProduct();
}

function selectPage(p) {
  currentPage = p;
  renderProduct();
}

function getFirstElementOfPage() {
  return (currentPage - 1) * totalPerPage;
}

function getDisplayedProducts() {
  const tempProducts = [];
  for (let j = 0; j < products.length; j++) {
    const product = products[j];
    //calculate needed data
    const finalPrice =
      product.originalPrice * (1 - product.salePercentage / 100);
    product.finalPrice = finalPrice;

    if (!useFilter) {
      tempProducts.push(product);
    } else {
      let isMatched = false;
      for (const filterKey in filters) {
        const filter = filters[filterKey];
        if (!apply(filter, product)) {
          isMatched = false;
          break;
        }
        isMatched = true;
      }
      if (isMatched) {
        tempProducts.push(product);
      }
    }
  }
  return tempProducts;
}

// price(cond1 OR cond2 OR cond3) AND discount(cond1 OR cond2)
const filters = {
  price: {
    enabled: false,
    rules: {
      "0_25": {
        enabled: false,
        func: function (product) {
          if (product.finalPrice > 0 && product.finalPrice <= 25) {
            return true;
          }
          return false;
        },
      },
      "25_50": {
        enabled: false,
        func: function (product) {
          if (product.finalPrice > 25 && product.finalPrice <= 50) {
            return true;
          }
          return false;
        },
      },
      "50_75": {
        enabled: false,
        func: function (product) {
          if (product.finalPrice > 50 && product.finalPrice <= 75) {
            return true;
          }
          return false;
        },
      },
      "75_100": {
        enabled: false,
        func: function (product) {
          if (product.finalPrice > 75 && product.finalPrice <= 100) {
            return true;
          }
          return false;
        },
      },
      100: {
        enabled: false,
        func: function (product) {
          if (product.finalPrice > 100) {
            return true;
          }
          return false;
        },
      },
    },
  },
  discount: {
    enabled: false,
    rules: {
      10: {
        enabled: false,
        func: function (product) {
          if (product.salePercentage == 10) {
            return true;
          }
          return false;
        },
      },
      20: {
        enabled: false,
        func: function (product) {
          if (product.salePercentage == 20) {
            return true;
          }
          return false;
        },
      },
      30: {
        enabled: false,
        func: function (product) {
          if (product.salePercentage == 30) {
            return true;
          }
          return false;
        },
      },
    },
  },
  category: {
    enabled: false,
    rules: {
      doll: {
        enabled: false, //checked: false
        func: function (product) {
          console.log(product);
          if ("dolls & dollhouses" === product.category) {
            console.log(product);
            return true;
          }
          return false;
        },
      },
      game: {
        enabled: false, //checked: false
        func: function (product) {
          if ("games & puzzles" === product.category) {
            return true;
          }
          return false;
        },
      },
      building: {
        enabled: false, //checked: false
        func: function (product) {
          if ("building set toys" === product.category) {
            return true;
          }
          return false;
        },
      },
      outdoor: {
        enabled: false, //checked: false
        func: function (product) {
          if ("outdoor & sport toys" === product.category) {
            return true;
          }
          return false;
        },
      },
    },
  },
  age: {
    enabled: false,
    rules: {
      "0_2": {
        enabled: false, //checked: false
        func: function (product) {
          if ("0-2 years" === product.age) {
            return true;
          }
          return false;
        },
      },
      "2_4": {
        enabled: false, //checked: false
        func: function (product) {
          if ("2-4 years" === product.age) {
            return true;
          }
          return false;
        },
      },
      "4_8": {
        enabled: false, //checked: false
        func: function (product) {
          if ("4-8 years" === product.age) {
            return true;
          }
          return false;
        },
      },
      "8_12": {
        enabled: false, //checked: false
        func: function (product) {
          if ("8-12 years" === product.age) {
            return true;
          }
          return false;
        },
      },
      12: {
        enabled: false, //checked: false
        func: function (product) {
          if ("12+ years" === product.age) {
            return true;
          }
          return false;
        },
      },
    },
  },
  gender: {
    enabled: false,
    rules: {
      boy: {
        enabled: false,
        func: function (product) {
          if ("boy" === product.gender) {
            return true;
          }
          return false;
        },
      },
      girl: {
        enabled: false,
        func: function (product) {
          if ("girl" === product.gender) {
            return true;
          }
          return false;
        },
      },
      unisex: {
        enabled: false, //checked: false
        func: function (product) {
          if ("unisex" === product.gender) {
            return true;
          }
          return false;
        },
      },
    },
  },
  brand: {
    enabled: false,
    rules: {
      nerf: {
        enabled: false, //checked: false
        func: function (product) {
          if ("nerf" === product.brand) {
            return true;
          }
          return false;
        },
      },
      barbie: {
        enabled: false, //checked: false
        func: function (product) {
          if ("barbie" === product.brand) {
            return true;
          }
          return false;
        },
      },
      lego: {
        enabled: false, //checked: false
        func: function (product) {
          if ("lego" === product.brand) {
            return true;
          }
          return false;
        },
      },
      lol: {
        enabled: false, //checked: false
        func: function (product) {
          if ("L.O.L Surprise" === product.brand) {
            return true;
          }
          return false;
        },
      },
      fisher: {
        enabled: false, //checked: false
        func: function (product) {
          if ("fisher-price" === product.brand) {
            return true;
          }
          return false;
        },
      },
      wheel: {
        enabled: false, //checked: false
        func: function (product) {
          if ("hot wheels" == product.brand) {
            return true;
          }
          return false;
        },
      },
    },
  },
};

function apply(filter, product) {
  if (!filter.enabled) {
    return true;
  }
  for (let ruleKey in filter.rules) {
    const rule = filter.rules[ruleKey];
    if (!rule.enabled) {
      continue;
    }
    if (rule.func(product)) {
      return true;
    }
  }
  return false;
}

$(".form-check-input").change(function (event) {
  // console.log(event);
  const priceChecked = $('input[type="checkbox"][name="price"]:checked');
  if (priceChecked.length > 0) {
    filters.price.enabled = true;
  } else {
    filters.price.enabled = false;
  }
  //reset price config
  for (const ruleKey in filters.price.rules) {
    filters.price.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < priceChecked.length; i++) {
    filters.price.rules[priceChecked[i].value].enabled = true;
  }

  const discountChecked = $('input[type="checkbox"][name="discount"]:checked');
  if (discountChecked.length > 0) {
    filters.discount.enabled = true;
  } else {
    filters.discount.enabled = false;
  }
  //reset discount config
  for (const ruleKey in filters.discount.rules) {
    filters.discount.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < discountChecked.length; i++) {
    filters.discount.rules[discountChecked[i].value].enabled = true;
  }

  const categoryChecked = $('input[type="checkbox"][name="category"]:checked');
  if (categoryChecked.length > 0) {
    filters.category.enabled = true;
  } else {
    filters.category.enabled = false;
  }
  //reset category config
  for (const ruleKey in filters.category.rules) {
    filters.category.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < categoryChecked.length; i++) {
    filters.category.rules[categoryChecked[i].value].enabled = true;
  }

  const ageChecked = $('input[type="checkbox"][name="age"]:checked');
  if (ageChecked.length > 0) {
    filters.age.enabled = true;
  } else {
    filters.age.enabled = false;
  }
  //reset price config
  for (const ruleKey in filters.age.rules) {
    filters.age.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < ageChecked.length; i++) {
    filters.age.rules[ageChecked[i].value].enabled = true;
  }

  const genderChecked = $('input[type="checkbox"][name="gender"]:checked');
  if (genderChecked.length > 0) {
    filters.gender.enabled = true;
  } else {
    filters.gender.enabled = false;
  }
  //reset price config
  for (const ruleKey in filters.gender.rules) {
    filters.gender.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < genderChecked.length; i++) {
    filters.gender.rules[genderChecked[i].value].enabled = true;
  }

  const brandChecked = $('input[type="checkbox"][name="brand"]:checked');
  if (brandChecked.length > 0) {
    filters.brand.enabled = true;
  } else {
    filters.brand.enabled = false;
  }
  //reset price config
  for (const ruleKey in filters.brand.rules) {
    filters.brand.rules[ruleKey].enabled = false;
  }

  for (let i = 0; i < brandChecked.length; i++) {
    filters.brand.rules[brandChecked[i].value].enabled = true;
  }

  useFilter = false;
  for (const filterKey in filters) {
    const filter = filters[filterKey];
    if (filter.enabled) {
      useFilter = true;
      break;
    }
  }
  currentPage = 1;
  renderProduct();
});
/**
 * END
 */
renderProduct();

//Reset button
$(function () {
  $(".reset").click(function () {
    $('input[type="checkbox"]').prop("checked", false);
    useFilter = false;
    currentPage = 1;
    renderProduct();
  });
});


$(function () {
  $(".filter-mobile").click(function () {
    $(".filter-mobile-content").show();
  });
});
$(function () {
  $(".done").click(function () {
    $(".filter-mobile-content").hide();
  });
});