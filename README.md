# San Juan 🌴 trip map

An interactive map of the food list for San Juan, Thu Sep 24 → Sun Sep 27, organized by day.

**Live:** https://akshathphillips.github.io/san-juan-travel/

## What it does
- Pins for every spot on the list (`data/san_juan_food_map.csv`), color-coded by day.
- Extra picks marked **Akshath’s Claude**: craft cocktail and mezcal bars, local desserts, coffee near the casa, forts and beaches. The **Show Akshath’s Claude picks** switch hides them all at once.
- Day tabs (Thu / Fri / Sat / Sun / Unplanned), each with a short plan. The app opens on today's tab.
- Walk or ride time from Casa Saffra for every spot, plus one-tap **Directions** (Google Maps) and **Uber** buttons. The **Uber home** button books a ride back to the casa.
- Tap a pin to move it to a different day, mark it ✓ done, move the pin, or hide it.
- **+** (or a long press on the map) adds a new spot. You can search for an address or drop the pin by hand.
- Edits are saved in your browser. **Share plan link** sends your version to someone else, and **Export CSV** downloads it.

## Editing the base data
The base data is in `places.js`: each day's plan and each place's coordinates and default day.

## Publishing
Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then pick the branch and `/ (root)`. The site has no build step.
