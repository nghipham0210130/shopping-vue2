import Shop from "../../view/pages/Shop";
import ProductCategory from "../../view/pages/ProductCategory";
import ProductList from "../../view/pages/ProductList";

const shop = {
    path: "/shop",
    name: "Shop",
    component: Shop,
    children: [
        {
          path: "/product-category",
          name: "ProductCategory",
          component: ProductCategory,
        },
        {
          // Go to Product List
          path: "product-list/:categoryId",
          name: "ProductList",
          component: ProductList,
          props: true,
          // Set  guard on the route definition object
          beforeEnter: (to, from, next) => {
            console.log("Entering Product Category", to.params.categoryId);
            next();
          },
        },
      ],
  };

  export default shop;