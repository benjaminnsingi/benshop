const product_01_image_01 = require('../images/28_2034-cr-1024x1269.jpg').default();
const product_01_image_02 = require('../images/28_2035-cr-270x335.jpg').default();

const product_01_image_03 = require('../images/30_2344-270x335.jpg').default();
const product_01_image_04 = require('../images/30_2345-270x335.jpg').default();

const product_01_image_05 = require('../images/36_2000-270x335.jpg').default();
const product_01_image_06 = require('../images/36_2001-270x335.jpg').default();

const product_01_image_07 = require('../images/46_1993-cr-270x335.jpg').default();
const product_01_image_08 = require('../images/46_1995-cr-270x335.jpg').default();

const product_01_image_09 = require('../images/47_2320-cr-270x335.jpg').default();
const product_01_image_10 = require('../images/47_2321-cr-270x335.jpg').default();

const product_01_image_11 = require('../images/chaussure_1a.jpg').default();
const product_01_image_12 = require('../images/chaussure_1b.jpg').default();

const product_01_image_13 = require('../images/chaussure_2a.jpg').default();
const product_01_image_14 = require('../images/chaussure_2b.jpg').default();

const product_01_image_15 = require('../images/sac_1a.jpg').default();
const product_01_image_16 = require('../images/sac_1b.jpg').default();

const product_01_image_17 = require('../images/sac_2a.jpg').default();
const product_01_image_18 = require('../images/sac_2b.jpg').default();

const product_01_image_19 = require('../images/montre_1a.jpg').default();
const product_01_image_20 = require('../images/montre_1b.jpg').default();

const product_01_image_21 = require('../images/montre_2a.jpg').default();
const product_01_image_22 = require('../images/montre_2b.jpg').default();


const products = [

    {
        title: "Maya Deluxe",
        price: "50",
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "Robes",
        colors: ["white", "red", "black"],
        slug: "Manches mi-longues",
        size: ["s", "m", "l", "xl", "xxl"],
        description: "SHEER KIMONO SLEEVE EMBELLISHED JACKET - Gilet"
    },
    {
        title: "Superdry FIELD -Parka",
        price: "150",
        image01: product_01_image_03,
        image02: product_01_image_04,
        categorySlug: "Manteaux",
        colors: ["white", "red", "black"],
        slug: "FIELD - Parka",
        size: ["s", "m", "l", "xl", "xxl"],
        description: "FIELD - Parka"
    },
    {
        title: "Superdry",
        price: "90",
        image01: product_01_image_05,
        image02: product_01_image_06,
        categorySlug: "Manteaux",
        colors: ["white", "red", "black"],
        slug: "KUMANO - Veste d'hiver",
        size: ["s", "m", "l", "xl", "xxl"],
        description: "KUMANO - Veste d'hiver"
    },
    {
        title: "Robe chemise",
        price: "108.50",
        image01: product_01_image_07,
        image02: product_01_image_08,
        categorySlug: "Robes",
        colors: ["white", "red", "black"],
        slug: "Robe chemise",
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Lacoste Robe chemise"
    },
    {
        title: "Camaïeu",
        price: "90.50",
        image01: product_01_image_09,
        image02: product_01_image_10,
        categorySlug: "Robes",
        colors: ["white", "red", "black"],
        slug: "Camaïeu Robe longue",
        size: ["s", "m", "l", "xl", "xxl"],
        description: "Camaïeu Robe longue"
    },
    {
        title: "Puma",
        price: "99.99",
        image01: product_01_image_11,
        image02: product_01_image_12,
        categorySlug: "Chaussures",
        slug: "MAYZE - Baskets basses",
        size: ["36", "37", "39", "40", "41", "42", "43"],
        description: "MAYZE - Baskets basses"
    },
    {
        title: "Converse",
        price: "99.99",
        image01: product_01_image_13,
        image02: product_01_image_14,
        categorySlug: "Chaussures",
        slug: "Baskets montantes",
        size: ["36", "37", "39", "40", "41", "42", "43"],
        description: "CHUCK TAYLOR ALL STAR HI - Baskets montantes"
    },
    {
        title: "Lacoste",
        price: "89.95",
        image01: product_01_image_15,
        image02: product_01_image_16,
        categorySlug: "Sacs",
        slug: "REVERSIBLE - Cabas",
        description: "REVERSIBLE - Cabas"
    },
    {
        title: "Anna Field",
        price: "24.95",
        image01: product_01_image_17,
        image02: product_01_image_18,
        categorySlug: "Sacs",
        slug: "Sac à main",
        description: "Anna Field Sac à main"
    },
    {
        title: "G-SHOCK",
        price: "104.95",
        image01: product_01_image_19,
        image02: product_01_image_20,
        categorySlug: "Montres",
        slug: "Montre à affichage digital",
        description: "WHITE SKELETON GA-2100SKE UNISEX - Montre à affichage digital"
    },
    {
        title: "G-SHOCK",
        price: "125.95",
        image01: product_01_image_21,
        image02: product_01_image_22,
        categorySlug: "Montres",
        slug: "Guess",
        description: "LADIES SPORT - Montre"
    }

]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min ) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData;