// Trip data. Edit freely — anything added in the app is saved in your browser
// and can be exported as CSV or shared as a link.
//
// day: "thu" | "fri" | "sat" | "sun" | "none"
// source: "list" (from san_juan_food_map.csv) | "suggested" (extra ideas) | "fixed" (home / airport)
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
        ["Night", "Keep it loose. Head over to Old San Juan: La Factoría → Cannon Club → Cui Cui"]
      ]
    },
    {
      id: "fri", short: "Fri", date: "2026-09-25", label: "Fri · Sep 25",
      title: "Old San Juan day → La Placita at night", color: "#0E9384",
      plan: [
        ["Morning", "Mallorca for a mallorca with ham & cheese, or coffee at SPIGA"],
        ["Late AM", "Walk El Morro → Calle del Sol → Castillo San Cristóbal"],
        ["Lunch", "El Jibarito or Deaverdura (Puerto Rican classics)"],
        ["Sunset", "Piña colada at Barrachina, then stroll Paseo de la Princesa"],
        ["Night", "Back to Santurce: dinner at Santaella → La Placita party → 🌮 if needed"]
      ]
    },
    {
      id: "sat", short: "Sat", date: "2026-09-26", label: "Sat · Sep 26",
      title: "Beach day + whatever else", color: "#2F6FED",
      plan: [
        ["Morning", "Kasalta breakfast (Ocean Park)"],
        ["Day", "Ocean Park beach (chill, local) or Condado / Escambrón"],
        ["Afternoon", "Manzana de Java or La Cueva del Mar on Calle Loíza"],
        ["Dinner", "Cocina al Fondo or Vianda, both close to the casa"]
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
    { id: "cocina-al-fondo", name: "Cocina al Fondo", address: "658 C. San Juan, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Dinner", status: "Active", notes: "", lat: 18.4525, lng: -66.0708, day: "sat", source: "list" },
    { id: "taco-bell-santurce", name: "Taco Bell - Santurce", address: "150 C. Labra, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Late-night / Fast Food", status: "Active", notes: "Your 'wasted' stop.", lat: 18.4505, lng: -66.0668, day: "fri", source: "list" },
    { id: "vianda", name: "Vianda", address: "1413 Avenida Ponce de León, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Dinner", status: "Active", notes: "", lat: 18.4485, lng: -66.0654, day: "sat", source: "list" },
    { id: "santaella", name: "Santaella", address: "219 Calle Canals, San Juan, PR 00907, Puerto Rico", area: "Santurce / La Placita", category: "Restaurant / Cocktails", status: "Active", notes: "Very close to La Placita.", lat: 18.4491, lng: -66.0628, day: "fri", source: "list" },
    { id: "kasalta", name: "Kasalta", address: "1966 McLeary Ave, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Breakfast / Bakery", status: "Active", notes: "", lat: 18.4545, lng: -66.0508, day: "sat", source: "list" },
    { id: "la-cueva-del-mar", name: "La Cueva del Mar - Calle Loíza", address: "1904 C. Loíza, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Lunch / Seafood", status: "Active", notes: "", lat: 18.4508, lng: -66.0551, day: "thu", source: "list" },
    { id: "manzana-de-java", name: "Manzana de Java", address: "105 Cll Pomarrosa, San Juan, PR 00911, Puerto Rico", area: "Ocean Park / Calle Loíza", category: "Restaurant", status: "Active", notes: "", lat: 18.4553, lng: -66.0489, day: "sat", source: "list" },
    { id: "barrachina", name: "Barrachina", address: "104 C. de la Fortaleza, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Dinner / Piña Colada", status: "Active", notes: "", lat: 18.4653, lng: -66.1167, day: "fri", source: "list" },
    { id: "cafe-caleta", name: "Café Caleta", address: "78 Caleta de San Juan, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Coffee / Brunch / Drinks", status: "Active", notes: "", lat: 18.4664, lng: -66.1180, day: "sun", source: "list" },
    { id: "la-factoria", name: "La Factoría", address: "148 Calle San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Nightlife / Cocktails", status: "Active", notes: "", lat: 18.4679, lng: -66.1162, day: "thu", source: "list" },
    { id: "spiga", name: "SPIGA", address: "258 C. de San Justo, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Bakery / Café", status: "Active", notes: "", lat: 18.4668, lng: -66.1143, day: "fri", source: "list" },
    { id: "cafeteria-mallorca", name: "Cafetería Mallorca", address: "300 C. de San Francisco, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Breakfast / Bakery", status: "Active", notes: "", lat: 18.4660, lng: -66.1148, day: "fri", source: "list" },
    { id: "el-jibarito", name: "El Jibarito", address: "280 C. del Sol, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Puerto Rican", status: "Active", notes: "", lat: 18.4688, lng: -66.1146, day: "fri", source: "list" },
    { id: "deaverdura", name: "Deaverdura", address: "200 C. del Sol, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Puerto Rican", status: "Active", notes: "", lat: 18.4687, lng: -66.1158, day: "fri", source: "list" },
    { id: "cafe-con-ron", name: "Café con Ron", address: "400 C. de San Francisco, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Coffee / Cocktails", status: "Permanently closed", notes: "The former Café con Ron location has since been replaced by GRASA.", lat: 18.4662, lng: -66.1125, day: "none", source: "list" },
    { id: "cannon-club", name: "The Cannon Club", address: "215 C. de San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Piano Bar / Cocktails", status: "Active", notes: "", lat: 18.4680, lng: -66.1150, day: "thu", source: "list" },
    { id: "pirilo", name: "Pirilo Pizza Rústica - Old San Juan", address: "207 C. de la Tanca, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Pizza / Dinner", status: "Active", notes: "", lat: 18.4652, lng: -66.1138, day: "none", source: "list" },
    { id: "verde-mesa", name: "Verde Mesa", address: "107 Calle Tetuán Esq. C. de San José, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Restaurant", status: "Active", notes: "", lat: 18.4644, lng: -66.1163, day: "none", source: "list" },
    { id: "materia-prima", name: "Materia Prima", address: "100 Calle del Cristo, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Restaurant / Market", status: "Active", notes: "Inside Hotel El Convento.", lat: 18.4670, lng: -66.1172, day: "none", source: "list" },
    { id: "cui-cui", name: "Cui Cui Viejo San Juan", address: "104 C. de San Sebastián, San Juan, PR 00901, Puerto Rico", area: "Old San Juan", category: "Cocktail Bar / Restaurant", status: "Active", notes: "", lat: 18.4678, lng: -66.1170, day: "thu", source: "list" },
    { id: "panoteca-san-miguel", name: "Panoteca San Miguel", address: "85 Avenue de Diego, San Juan, PR 00927, Puerto Rico", area: "Cupey / Further Out", category: "Bakery", status: "Temporarily closed (latest listing)", notes: "Current listings conflict on the exact historical address; latest business listing points here.", lat: 18.3990, lng: -66.0535, day: "none", source: "list" },

    // ── suggestions (remove any you don't want) ──
    { id: "la-placita", name: "La Placita de Santurce", address: "Plaza del Mercado de Santurce, C. Dos Hermanos, San Juan, PR 00907", area: "Santurce / La Placita", category: "Nightlife / Plaza", status: "Active", notes: "Market by day; the street party gets going Thursday to Saturday nights. Around the corner from the casa.", lat: 18.4496, lng: -66.0634, day: "fri", source: "suggested" },
    { id: "el-morro", name: "Castillo San Felipe del Morro", address: "501 C. Norzagaray, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Fort", status: "Active", notes: "Go early for the big lawn and the ocean views, and bring water.", lat: 18.4710, lng: -66.1240, day: "fri", source: "suggested" },
    { id: "san-cristobal", name: "Castillo San Cristóbal", address: "501 C. Norzagaray, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Fort", status: "Active", notes: "The other fort, on the east end of Old San Juan.", lat: 18.4672, lng: -66.1106, day: "fri", source: "suggested" },
    { id: "paseo-princesa", name: "Paseo de la Princesa", address: "Paseo de la Princesa, San Juan, PR 00901", area: "Old San Juan", category: "Sight / Walk", status: "Active", notes: "Waterfront promenade, good at sunset.", lat: 18.4630, lng: -66.1178, day: "fri", source: "suggested" },
    { id: "ocean-park-beach", name: "Ocean Park Beach", address: "Playa Ocean Park, San Juan, PR 00911", area: "Ocean Park / Calle Loíza", category: "Beach", status: "Active", notes: "Wide, local, less touristy. Close to Kasalta & Manzana de Java.", lat: 18.4568, lng: -66.0505, day: "sat", source: "suggested" },
    { id: "condado-beach", name: "Condado Beach", address: "Playa del Condado, San Juan, PR 00907", area: "Condado", category: "Beach", status: "Active", notes: "Closest beach to the casa, with hotel bars nearby.", lat: 18.4592, lng: -66.0722, day: "sat", source: "suggested" },
    { id: "escambron", name: "Playa del Escambrón", address: "Playa del Escambrón, San Juan, PR 00901", area: "Puerta de Tierra", category: "Beach", status: "Active", notes: "Calm, protected water, good for a swim or snorkel. On the way to Old San Juan.", lat: 18.4672, lng: -66.0872, day: "sat", source: "suggested" },
    { id: "pinones", name: "Piñones Kiosks", address: "PR-187, Piñones, Loíza, PR 00772", area: "Piñones", category: "Beach / Street Food", status: "Active", notes: "Bacalaítos & alcapurrias by the beach, about 10 min from SJU. An easy Sunday stop before the flight.", lat: 18.4478, lng: -65.9770, day: "sun", source: "suggested" }
  ]
};
