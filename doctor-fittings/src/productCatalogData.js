const categoryImageModules = import.meta.glob(
  "./assets/product-images/product-categories/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);

const slidingWindowLockModules = import.meta.glob(
  "./assets/product-images/sliding-window-lock/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const dumalRollersModules = import.meta.glob(
  "./assets/product-images/dumal-window-sliding-rollers/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const upvcRollersModules = import.meta.glob(
  "./assets/product-images/upvc-window-sliding-rollers/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const windowSlidingRollersModules = import.meta.glob(
  "./assets/product-images/window-sliding-rollers/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const handlesModules = import.meta.glob(
  "./assets/product-images/window-handles/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const buttHingesModules = import.meta.glob(
  "./assets/product-images/butt-hinges/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const cornerCleatModules = import.meta.glob(
  "./assets/product-images/corner-cleat-joints/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);
const accessoriesModules = import.meta.glob(
  "./assets/product-images/ACCESSORIES/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}",
  { eager: true, import: "default" },
);

const CATEGORY_DEFINITIONS = [
  {
    title: "Sliding Window Lock",
    slug: "sliding-window-lock",
    categoryImageName: "SLIDING WINDOW LOCK.png",
    modules: slidingWindowLockModules,
  },
  {
    title: "Dumal Window Sliding Rollers",
    slug: "dumal-window-sliding-rollers",
    categoryImageName: "DUMAL WINDOW SLIDING ROLLERS.png",
    modules: dumalRollersModules,
  },
  {
    title: "UPVC Window Sliding Rollers",
    slug: "upvc-window-sliding-rollers",
    categoryImageName: "UPVC WINDOW SLIDING ROLLERS.png",
    modules: upvcRollersModules,
  },
  {
    title: "Window Sliding Rollers (Premium)",
    slug: "window-sliding-rollers-premium",
    categoryImageName: "WINDOW SLIDING ROLLERS (PREMIUM).png",
    modules: windowSlidingRollersModules,
    include: (name) => !/(eco|economy)/i.test(name),
  },
  {
    title: "Window Sliding Rollers (Economy)",
    slug: "window-sliding-rollers-economy",
    categoryImageName: "WINDOW SLIDING ROLLERS (ECONOMY).png",
    modules: windowSlidingRollersModules,
    include: (name) => /(eco|economy)/i.test(name),
  },
  {
    title: "G & C Channel Door Sliding System",
    slug: "g-c-channel-door-sliding-system",
    categoryImageName: "G CHANNEL & C CHANNEL DOOR SLIDING SYSTEM.png",
    modules: accessoriesModules,
    include: (name) => /(channel|door sliding|rb-dof|rb-cof)/i.test(name),
  },
  {
    title: "Window & Door Handle",
    slug: "window-door-handle",
    categoryImageName: "Window Door HAndle.png",
    modules: handlesModules,
  },
  {
    title: "Concealed Door Closer",
    slug: "concealed-door-closer",
    categoryImageName: "Concealed Door Closer.png",
    modules: accessoriesModules,
    include: (name) => /closer/i.test(name),
  },
  {
    title: "Butt Hinges",
    slug: "butt-hinges",
    categoryImageName: "BUTT HINGES.png",
    modules: buttHingesModules,
  },
  {
    title: "Corner Cleat Joints",
    slug: "corner-cleat-joints",
    categoryImageName: "CORNER CLEAT JOINTS.png",
    modules: cornerCleatModules,
  },
  {
    title: "Stainless Steel Screen Mesh",
    slug: "stainless-steel-screen-mesh",
    categoryImageName: "STAINLESS STEEL SCREEN MESH.png",
    modules: accessoriesModules,
    include: (name) => /(mesh|screen)/i.test(name),
  },
];

const normalizeFileName = (filePath) =>
  filePath.split("/").pop()?.replace(/\.[^/.]+$/, "")?.trim() || "";

const getCodeFromName = (name) => {
  const match =
    name.match(/\b[A-Z]{2,}[A-Z0-9-]*\b/) || name.match(/\b\d+[A-Z0-9-]*\b/);
  return match ? match[0] : name;
};

const categoryImageByName = Object.fromEntries(
  Object.entries(categoryImageModules).map(([path, image]) => [
    path.split("/").pop(),
    image,
  ]),
);

const buildProducts = (categoryTitle, modules, includeFilter) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image]) => {
      const name = normalizeFileName(path);
      return {
        name,
        code: getCodeFromName(name),
        product_code: getCodeFromName(name),
        category: categoryTitle,
        image,
        price: "On Request",
        unit: "PCS",
      };
    })
    .filter((p) => (includeFilter ? includeFilter(p.name) : true));

export const PRODUCT_CATEGORIES = CATEGORY_DEFINITIONS.map((category) => ({
  name: category.title,
  slug: category.slug,
  image: categoryImageByName[category.categoryImageName],
}));

export const CATEGORY_DATA = Object.fromEntries(
  CATEGORY_DEFINITIONS.map((category) => {
    const products = buildProducts(
      category.title,
      category.modules,
      category.include,
    );
    return [
      category.slug,
      {
        title: category.title,
        slug: category.slug,
        products,
      },
    ];
  }),
);

export const ALL_PRODUCTS = Object.values(CATEGORY_DATA).flatMap(
  (category) => category.products,
);
