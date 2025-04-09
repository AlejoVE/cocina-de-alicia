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
    recipe: null,
  },
  {
    id: 2,
    title: "Tarta de Chocolate  y Fresas",
    image: "/images/tarta-chocolate-fresa2.jpg",
    category: "Tartas",
    recipe: null,
  },
  {
    id: 3,
    title: "Tarta de Piña",
    image: "/images/tarta-pina.jpg",
    category: "Tartas",
    recipe: null,
    // recipe: `
    //   **Ingredientes:**
    //   - 200g de galletas digestive
    //   - 100g de mantequilla
    //   - 500g de queso crema
    //   - 150g de azúcar
    //   - 3 huevos
    //   - Ralladura y zumo de 2 limones

    //   **Preparación:**
    //   1. Triturar las galletas y mezclar con la mantequilla derretida.
    //   2. Forrar la base de un molde desmontable y refrigerar.
    //   3. Batir el queso crema con el azúcar.
    //   4. Añadir los huevos uno a uno, la ralladura y el zumo de limón.
    //   5. Verter sobre la base de galleta.
    //   6. Hornear a 160°C durante 50-60 minutos.
    //   7. Dejar enfriar completamente antes de desmoldar.
    // `,
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
    image: "/images/red-velvet.jpg",
    category: "Tartas",
    recipe: null
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
  {
    id: 8,
    title: "Pan Dulce",
    image: "/images/pan-dulce.jpg",
    category: "Panadería",
    recipe: null,
  },
  {
    id: 9,
    title: "Tequeños",
    image: "/images/tequenos.jpg",
    category: "Panadería",
    recipe: null,
  },

]

export const categories = Array.from(new Set(desserts.map((dessert) => dessert.category)))

