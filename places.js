// Trip data. Edit freely — anything added in the app is saved in your browser
// and can be exported as CSV or shared as a link.
//
// day: "thu" | "fri" | "sat" | "sun" | "none"
// types: any of "food" | "late" | "dessert" | "drinks" | "coffee" | "sights"  ("late" = open late at night)
// source: "list" (from san_juan_food_map.csv) | "ai" (Akshath's AI picks) | "fixed" (home / airport)
// Pins are hand-placed from the street addresses and are approximate; in the app,
// use "Move pin" to fix one. Directions and Uber links use the street address.

window.TRIP = {
  days: [
    {
      id: "thu", short: "Thu", date: "2026-09-24", label: "Thu · Sep 24",
      title: "Touchdown + a loose Old San Juan night", color: "#E8613C",
      plan: [
        ["12:00 PM", "Land at SJU ✈️"],
        ["~12:45", "Uber straight to a bite. La Cueva del Mar and Kasalta are right on the way in."],
        ["After", "Drop bags at Casa Saffra 🏠"],
        ["Night", "Keep it loose. Head over to Old San Juan: La Factoría → Cannon Club → Cui Cui, or an Oaxacan Old Fashioned at La Grieta"]
      ]
    },
    {
      id: "fri", short: "Fri", date: "2026-09-25", label: "Fri · Sep 25",
      title: "Old San Juan day → La Placita at night", color: "#0E9384",
      plan: [
        ["Morning", "Coffee at Café Comunión near the casa, then Mallorca in Old San Juan for a mallorca with ham & cheese"],
        ["Late AM", "Walk El Morro → Calle del Sol → Castillo San Cristóbal"],
        ["Lunch", "El Jibarito or Deaverdura (Puerto Rican classics)"],
        ["Afternoon", "Dessert break: Señor Paleta or Chocobar Cortés"],
        ["Sunset", "Piña colada at Barrachina, then stroll Paseo de la Princesa"],
        ["Night", "Back to Santurce: dinner at Santaella → JungleBird or El Almacén → La Placita party → Ruben's Café (24 hours) if needed"]
      ]
    },
    {
      id: "sat", short: "Sat", date: "2026-09-26", label: "Sat · Sep 26",
      title: "Beach day + whatever else", color: "#2F6FED",
      plan: [
        ["Morning", "Kasalta breakfast (the Obama bakery) or Café Regina, both in Ocean Park"],
        ["Day", "Ocean Park beach (chill, local) or Condado / Escambrón"],
        ["Afternoon", "Manzana de Java or La Cueva del Mar on Calle Loíza"],
        ["Dinner", "Cocina al Fondo or Vianda, both close to the casa"],
        ["Night", "Cocktails at La Penúltima or Doble Zero, and Peccas for ice cream"]
      ]
    },
    {
      id: "sun", short: "Sun", date: "2026-09-27", label: "Sun · Sep 27",
      title: "Loose morning, fly home", color: "#9352D9",
      plan: [
        ["11:00 AM", "Check out of Casa Saffra"],
        ["Midday", "Last bites: Café Caleta brunch, or Piñones kiosks (10 min from SJU)"],
        ["~3:30 PM", "Uber to SJU"],
        ["5:32 PM", "Boarding ✈️"]
      ]
    },
    { id: "none", short: "Unplanned", label: "Unplanned", title: "Not on a day yet", color: "#7C8591", plan: [] }
  ],

  places: [
    // ── fixed points ──
    { id: "casa-saffra", name: "Casa Saffra", address: "", area: "Home Base", category: "Home Base", status: "Active", notes: "Home base for distance comparisons.", lat: 18.4494, lng: -66.0631, day: "none", source: "fixed", kind: "home" },
    { id: "sju", name: "SJU · Luis Muñoz Marín Airport", address: "Aeropuerto Internacional Luis Muñoz Marín, Carolina, PR 00979", area: "Isla Verde / Carolina", category: "Airport", status: "Active", notes: "Land Thu 12:00 PM · Boarding Sun 5:32 PM.", lat: 18.4394, lng: -66.0018, day: "none", source: "fixed", kind: "airport" },

    // ── from the list ──
    { id: "cocina-al-fondo", name: "Cocina al Fondo", address: "658 C. San Juan, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Dinner", status: "Active", notes: "", lat: 18.4525, lng: -66.0708, types: ["food"], day: "sat", source: "list" },
    { id: "taco-bell-santurce", name: "Taco Bell - Santurce", address: "150 C. Labra, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Late-night / Fast Food", status: "Active", notes: "Your 'wasted' stop. Heads up: current listings show it closing around 9:30 PM. After the bars, Ruben's Café (24 hours, 5 min away) is the safer bet.", lat: 18.4505, lng: -66.0668, types: ["food"], day: "fri", source: "list" },
    { id: "vianda", name: "Vianda", address: "1413 Avenida Ponce de León, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Dinner", status: "Active", notes: "", lat: 18.4485, lng: -66.0654, types: ["food"], day: "sat", source: "list" },
    { id: "santaella", name: "Santaella", address: "219 Calle Canals, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Restaurant / Cocktails", status: "Active", notes: "Very close to La Placita.", lat: 18.4491, lng: -66.0628, types: ["food", "drinks"], day: "fri", source: "list" },
    { id: "kasalta", name: "Kasalta", address: "1966 McLeary Ave, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Breakfast / Bakery", status: "Active", notes: "The bakery Obama visited (June 2011). He ordered a medianoche sandwich; people still ask for Obama's table by the McLeary Ave windows.", lat: 18.4545, lng: -66.0508, types: ["food", "coffee"], day: "sat", source: "list" },
    { id: "la-cueva-del-mar", name: "La Cueva del Mar - Calle Loíza", address: "1904 C. Loíza, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Lunch / Seafood", status: "Active", notes: "", lat: 18.4508, lng: -66.0551, types: ["food"], day: "thu", source: "list" },
    { id: "manzana-de-java", name: "Manzana de Java", address: "105 Cll Pomarrosa, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Restaurant", status: "Active", notes: "", lat: 18.4553, lng: -66.0489, types: ["food"], day: "sat", source: "list" },
    { id: "barrachina", name: "Barrachina", address: "104 C. de la Fortaleza, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Dinner / Piña Colada", status: "Active", notes: "", lat: 18.4653, lng: -66.1167, types: ["food", "drinks"], day: "fri", source: "list" },
    { id: "cafe-caleta", name: "Café Caleta", address: "78 Caleta de San Juan, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Coffee / Brunch / Drinks", status: "Active", notes: "", lat: 18.4664, lng: -66.1180, types: ["coffee", "food", "drinks"], day: "sun", source: "list" },
    { id: "la-factoria", name: "La Factoría", address: "148 Calle San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Nightlife / Cocktails", status: "Active", notes: "", lat: 18.4679, lng: -66.1162, types: ["drinks"], day: "thu", source: "list" },
    { id: "spiga", name: "SPIGA", address: "258 C. de San Justo, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Bakery / Café", status: "Active", notes: "", lat: 18.4668, lng: -66.1143, types: ["coffee", "dessert"], day: "fri", source: "list" },
    { id: "cafeteria-mallorca", name: "Cafetería Mallorca", address: "300 C. de San Francisco, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Breakfast / Bakery", status: "Active", notes: "", lat: 18.4660, lng: -66.1148, types: ["food", "coffee"], day: "fri", source: "list" },
    { id: "el-jibarito", name: "El Jibarito", address: "280 C. del Sol, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Puerto Rican", status: "Active", notes: "", lat: 18.4688, lng: -66.1146, types: ["food"], day: "fri", source: "list" },
    { id: "deaverdura", name: "Deaverdura", address: "200 C. del Sol, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Puerto Rican", status: "Active", notes: "", lat: 18.4687, lng: -66.1158, types: ["food"], day: "fri", source: "list" },
    { id: "cannon-club", name: "The Cannon Club", address: "215 C. de San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Piano Bar / Cocktails", status: "Active", notes: "", lat: 18.4680, lng: -66.1150, types: ["drinks"], day: "thu", source: "list" },
    { id: "pirilo", name: "Pirilo Pizza Rústica - Old San Juan", address: "207 C. de la Tanca, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Pizza / Dinner", status: "Active", notes: "Open late: until 2 AM on Friday and midnight on Saturday.", lat: 18.4652, lng: -66.1138, types: ["food", "late"], day: "none", source: "list" },
    { id: "verde-mesa", name: "Verde Mesa", address: "107 Calle Tetuán Esq. C. de San José, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Restaurant", status: "Active", notes: "", lat: 18.4644, lng: -66.1163, types: ["food"], day: "none", source: "list" },
    { id: "materia-prima", name: "Materia Prima", address: "100 Calle del Cristo, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Restaurant / Market", status: "Active", notes: "Inside Hotel El Convento.", lat: 18.4670, lng: -66.1172, types: ["food"], day: "none", source: "list" },
    { id: "cui-cui", name: "Cui Cui Viejo San Juan", address: "104 C. de San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Cocktail Bar / Restaurant", status: "Active", notes: "", lat: 18.4678, lng: -66.1170, types: ["drinks", "food"], day: "thu", source: "list" },

    // ── Akshath's AI picks (source: "ai"; can be hidden in the app) ──
    // cocktails (paper plane / Oaxacan old fashioned crowd)
    { id: "junglebird", name: "JungleBird", address: "254 C. Canals, San Juan, PR 00907", area: "Santurce / La Placita", category: "Craft Cocktails", status: "Active", notes: "Same team as La Factoría. Tropical, Taíno-inspired craft cocktails right on La Placita, a few steps from the casa.", lat: 18.4490, lng: -66.0626, types: ["drinks"], day: "fri", source: "ai" },
    { id: "el-almacen", name: "El Almacén Speakeasy", address: "202 C. Canals, San Juan, PR 00907", area: "Santurce / La Placita", category: "Speakeasy / Whiskey Cocktails", status: "Active", notes: "Hidden whiskey and cocktail bar behind HP Tavern at La Placita. A good bet for a Paper Plane or a stirred whiskey drink.", lat: 18.4493, lng: -66.0633, types: ["drinks"], day: "fri", source: "ai" },
    { id: "la-penultima", name: "La Penúltima", address: "1359 Av. Juan Ponce de León, San Juan, PR 00907", area: "Santurce / La Placita", category: "Craft Cocktails", status: "Active", notes: "Bartenders' favorite in Santurce, with creative cocktails and a lively crowd. About 5 minutes' walk from the casa.", lat: 18.4494, lng: -66.0672, types: ["drinks"], day: "sat", source: "ai" },
    { id: "doble-zero", name: "Doble Zero", address: "632 Calle Cerra, San Juan, PR 00907", area: "Santurce / Calle Cerra", category: "Mezcal Cocktails / Kitchen", status: "Active", notes: "Agave-forward cocktail bar on Calle Cerra (try the 00907, a carbonated mezcal drink). Open daily 5 PM to 1 AM.", lat: 18.4502, lng: -66.0716, types: ["drinks", "food"], day: "sat", source: "ai" },
    { id: "la-grieta", name: "La Grieta", address: "351 C. de San Francisco, San Juan, PR 00901", area: "Old San Juan", category: "Mezcal Bar", status: "Active", notes: "Hidden mezcalería. The place for an Oaxacan Old Fashioned. Open daily 6 PM to midnight; reservations via @grietavsj.", lat: 18.4663, lng: -66.1133, types: ["drinks"], day: "thu", source: "ai" },

    // desserts
    { id: "senor-paleta", name: "Señor Paleta", address: "153 C. Tetuán, San Juan, PR 00901", area: "Old San Juan", category: "Dessert / Paletas", status: "Active", notes: "Fresh-fruit popsicles (parcha, guava, coconut) with a chocolate dip. A classic Old San Juan cool-down.", lat: 18.4645, lng: -66.1155, types: ["dessert"], day: "fri", source: "ai" },
    { id: "chocobar-cortes", name: "Chocobar Cortés", address: "210 C. de San Francisco, San Juan, PR 00901", area: "Old San Juan", category: "Dessert / Chocolate", status: "Active", notes: "Run by the Puerto Rican chocolate family Cortés (since 1929). Hot chocolate with cheese, and chocolate everything.", lat: 18.4659, lng: -66.1157, types: ["dessert", "food"], day: "fri", source: "ai" },
    { id: "anita-gelato", name: "Anita Gelato", address: "65 C. de la Fortaleza, San Juan, PR 00901", area: "Old San Juan", category: "Dessert / Gelato", status: "Active", notes: "The top-rated gelato in Old San Juan, with more than 150 rotating flavors.", lat: 18.4649, lng: -66.1182, types: ["dessert"], day: "sun", source: "ai" },
    { id: "peccas", name: "Peccas Helado Artesanal", address: "1000 Av. Juan Ponce de León, Suite 4, San Juan, PR 00907", area: "Santurce / Miramar", category: "Dessert / Ice Cream", status: "Active", notes: "Small-batch local ice cream with island flavors. A short ride from the casa.", lat: 18.4548, lng: -66.0795, types: ["dessert"], day: "sat", source: "ai" },

    // morning coffee near the casa
    { id: "cafe-comunion", name: "Café Comunión", address: "1616 Av. Juan Ponce de León, San Juan, PR 00909", area: "Santurce / La Placita", category: "Coffee", status: "Active", notes: "Specialty coffee from a two-time Puerto Rico latte art champion. About 10 minutes' walk from the casa.", lat: 18.4468, lng: -66.0598, types: ["coffee"], day: "fri", source: "ai" },
    { id: "dos-cafes", name: "Dos Cafés Santurce", address: "220 Calle del Parque, San Juan, PR 00912", area: "Santurce / La Placita", category: "Coffee / Breakfast", status: "Active", notes: "Neighborhood café with coffee and breakfast. Mon–Fri 7 AM–2 PM, Sat 8 AM–12:30 PM, closed Sunday.", lat: 18.4478, lng: -66.0588, types: ["coffee", "food"], day: "none", source: "ai" },
    { id: "cafe-regina", name: "Café Regina (Ocean Park)", address: "58 Calle Taft, San Juan, PR 00911", area: "Ocean Park / Calle Loíza", category: "Coffee / Pastries", status: "Active", notes: "Espresso and house-made pastries from a James Beard–nominated pastry chef. One block from Ocean Park beach, so an easy stop on beach day.", lat: 18.4561, lng: -66.0498, types: ["coffee", "dessert"], day: "sat", source: "ai" },

    // late-night food
    { id: "rubens-cafe", name: "Ruben's Café", address: "1317 Av. Juan Ponce de León, San Juan, PR 00907", area: "Santurce / La Placita", category: "Late-night / Puerto Rican", status: "Active", notes: "Open 24 hours. Puerto Rican comfort food about 5 minutes from the casa: the move after La Placita.", lat: 18.4499, lng: -66.0690, types: ["food", "late"], day: "fri", source: "ai" },
    { id: "los-pinos", name: "Los Pinos Café", address: "655 Av. Juan Ponce de León, San Juan, PR 00907", area: "Santurce / Miramar", category: "Late-night / Puerto Rican", status: "Active", notes: "Open 24 hours. Cheap, filling home-style Puerto Rican plates in Miramar.", lat: 18.4578, lng: -66.0858, types: ["food", "late"], day: "none", source: "ai" },
    { id: "el-hamburger", name: "El Hamburger", address: "402 Av. Muñoz Rivera, San Juan, PR 00901", area: "Puerta de Tierra", category: "Late-night / Burgers", status: "Active", notes: "Old-school burger joint (60+ years) across from Escambrón. Open until 2 AM Fri–Sat and midnight other nights.", lat: 18.4659, lng: -66.0878, types: ["food", "late"], day: "sat", source: "ai" },
    { id: "bebos-cafe", name: "Bebo's Café", address: "1600 C. Loíza, San Juan, PR 00911", area: "Ocean Park / Calle Loíza", category: "Late-night / Puerto Rican", status: "Active", notes: "Big Puerto Rican comfort-food menu. Open until midnight Fri–Sat and 11 PM other nights.", lat: 18.4516, lng: -66.0601, types: ["food", "late"], day: "none", source: "ai" },

    { id: "la-placita", name: "La Placita de Santurce", address: "Plaza del Mercado de Santurce, C. Dos Hermanos, San Juan, PR 00907", area: "Santurce / La Placita", category: "Nightlife / Plaza", status: "Active", notes: "Market by day; the street party gets going Thursday to Saturday nights. Kiosks around the plaza sell alcapurrias, bacalaítos and mofongo late into the night. Around the corner from the casa.", lat: 18.4496, lng: -66.0634, types: ["drinks", "food", "late"], day: "fri", source: "ai" },
    { id: "el-morro", name: "Castillo San Felipe del Morro", address: "501 C. Norzagaray, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Fort", status: "Active", notes: "Go early for the big lawn and the ocean views, and bring water.", lat: 18.4710, lng: -66.1240, types: ["sights"], day: "fri", source: "ai" },
    { id: "san-cristobal", name: "Castillo San Cristóbal", address: "501 C. Norzagaray, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Fort", status: "Active", notes: "The other fort, on the east end of Old San Juan.", lat: 18.4672, lng: -66.1106, types: ["sights"], day: "fri", source: "ai" },
    { id: "paseo-princesa", name: "Paseo de la Princesa", address: "Paseo de la Princesa, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Walk", status: "Active", notes: "Waterfront promenade, good at sunset.", lat: 18.4630, lng: -66.1178, types: ["sights"], day: "fri", source: "ai" },
    { id: "ocean-park-beach", name: "Ocean Park Beach", address: "Playa Ocean Park, San Juan, PR 00911", area: "Ocean Park / Calle Loíza", category: "Beach", status: "Active", notes: "Wide, local, less touristy. Close to Kasalta & Manzana de Java.", lat: 18.4568, lng: -66.0505, types: ["sights"], day: "sat", source: "ai" },
    { id: "condado-beach", name: "Condado Beach", address: "Playa del Condado, San Juan, PR 00907", area: "Condado", category: "Beach", status: "Active", notes: "Closest beach to the casa, with hotel bars nearby.", lat: 18.4592, lng: -66.0722, types: ["sights"], day: "sat", source: "ai" },
    { id: "escambron", name: "Playa del Escambrón", address: "Playa del Escambrón, San Juan, PR 00901", area: "Puerta de Tierra", category: "Beach", status: "Active", notes: "Calm, protected water, good for a swim or snorkel. On the way to Old San Juan.", lat: 18.4672, lng: -66.0872, types: ["sights"], day: "sat", source: "ai" },
    { id: "pinones", name: "Piñones Kiosks", address: "PR-187, Piñones, Loíza, PR 00772", area: "Piñones", category: "Beach / Street Food", status: "Active", notes: "Bacalaítos & alcapurrias by the beach, about 10 min from SJU. An easy Sunday stop before the flight.", lat: 18.4478, lng: -65.9770, types: ["food", "sights"], day: "sun", source: "ai" }
  ]
};
