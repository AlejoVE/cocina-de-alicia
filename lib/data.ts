export interface Dessert {
  id: number
  title: string
  image: string
  recipe: string | null
  category: string
}

export const desserts: Dessert[] = [
  {
    id: 1,
    title: "Tarta de Chocolate y Fresa",
    image: "/images/tarta-chocolate-fresa.jpg",
    category: "Tartas",
    recipe: `
      **Ingredientes:**
      - 200g de chocolate negro
      - 150g de mantequilla
      - 4 huevos
      - 150g de azúcar
      - 100g de harina
      - 200g de frambuesas frescas
      
      **Preparación:**
      1. Precalentar el horno a 180°C.
      2. Derretir el chocolate con la mantequilla al baño maría.
      3. Batir los huevos con el azúcar hasta que estén espumosos.
      4. Incorporar la mezcla de chocolate y la harina tamizada.
      5. Añadir la mitad de las frambuesas a la mezcla.
      6. Verter en un molde y hornear durante 30-35 minutos.
      7. Decorar con el resto de frambuesas.
    `,
  },
  {
    id: 2,
    title: "Tarta de Chocolate",
    image: "/images/tarta-chocolate.jpg",
    category: "Tartas",
    recipe: null,
  },
  {
    id: 3,
    title: "Tarta de Piña",
    image: "/images/tarta-pina.jpg",
    category: "Tartas",
    recipe: `
      **Ingredientes:**
      - 200g de galletas digestive
      - 100g de mantequilla
      - 500g de queso crema
      - 150g de azúcar
      - 3 huevos
      - Ralladura y zumo de 2 limones
      
      **Preparación:**
      1. Triturar las galletas y mezclar con la mantequilla derretida.
      2. Forrar la base de un molde desmontable y refrigerar.
      3. Batir el queso crema con el azúcar.
      4. Añadir los huevos uno a uno, la ralladura y el zumo de limón.
      5. Verter sobre la base de galleta.
      6. Hornear a 160°C durante 50-60 minutos.
      7. Dejar enfriar completamente antes de desmoldar.
    `,
  },
  {
    id: 4,
    title: "Pan de Jamón",
    image: "/images/pan-jamon.jpg",
    category: "Panadería",
    recipe: null,
  },
  {
    id: 5,
    title: "Tarta Red Velvet",
    image: "/images/tarta-red-velvet.jpg",
    category: "Tartas",
    recipe: `
      **Ingredientes:**
      - 3 manzanas grandes
      - 200g de harina
      - 150g de azúcar
      - 100g de mantequilla
      - 2 huevos
      - 1 cucharadita de canela
      - 1 sobre de levadura
      
      **Preparación:**
      1. Pelar y cortar las manzanas en láminas finas.
      2. Mezclar la harina, el azúcar, la mantequilla derretida, los huevos, la canela y la levadura.
      3. Verter la mitad de la masa en un molde.
      4. Colocar las manzanas y cubrir con el resto de la masa.
      5. Hornear a 180°C durante 40-45 minutos.
    `,
  },
  {
    id: 6,
    title: "Tarta de Melocotón",
    image: "/images/tarta-melocoton.jpg",
    category: "Tartas",
    recipe: null,
  },
  {
    id: 7,
    title: "Dulce de Lechosa",
    image: "/images/dulce-lechosa.jpg",
    category: "Dulces",
    recipe: null,
  },

]

export const categories = Array.from(new Set(desserts.map((dessert) => dessert.category)))

