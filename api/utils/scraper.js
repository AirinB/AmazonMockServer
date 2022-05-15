const Xray = require("x-ray");
const xray = Xray({
  filters: {
    trim: function (value) {
      return typeof value === "string" ? value.replace(/\n/, "").trim() : value;
    },
  },
});

const normalizeScrapedData = (data, url) => {
  const asinRegexp = /(?<=dp\/)(.*)(?=\/)/gi;
  const [possibleAsin] = url.match(asinRegexp) || [];

  const [oldPrice, newPrice, priceDiff] = data.prices;
  const prices = {};
  if (data.prices.length) {
    if (!priceDiff || !priceDiff.price) {
      prices["current_price"] = Number(oldPrice.price.slice(1));
      prices.currency = oldPrice.price.charAt(0);
    } else {
      prices["current_price"] = Number(newPrice.price.slice(1));
      prices["previous_price"] = Number(oldPrice.price.slice(1));
      prices.currency = newPrice.price.charAt(0);
    }
  }
  return {
    ...data,
    out_of_stock: !!data.out_of_stock,
    amazon_choice: !!data.amazon_choice,
    asin: data.asin || possibleAsin,
    prices,
    reviews: {
      stars: Number.parseFloat(data.reviews.stars),
      total_reviews: Number.parseFloat(
        data.reviews.total_reviews.replace(",", "")
      ),
    },
  };
};

const parseAmazon = (product_url) => {
  return new Promise((resolve, reject) => {
    xray(product_url, {
      asin: "#ftSelectAsin@value",
      title: "#productTitle | trim",
      image: "#landingImage@src",
      prices: xray("#corePrice_desktop tr", [
        {
          price: ".a-offscreen",
        },
      ]),
      reviews: xray("#averageCustomerReviews", {
        stars: ".a-icon-alt",
        total_reviews: ".a-size-base",
      }),
      amazon_choice: "#acBadge_feature_div .ac-badge-rectangle",
      description: "#productDescription | trim",
      out_of_stock: "#outOfStock .a-color-price.a-text-bold",
      categoryTree: xray("#wayfinding-breadcrumbs_feature_div li", [
        {
          category: "a | trim",
        },
      ]),
    })((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          ...normalizeScrapedData(data, product_url),
          raw: data,
        });
      }
    });
  });
};

module.exports = parseAmazon;
