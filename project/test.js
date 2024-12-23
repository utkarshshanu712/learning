
// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Normalize place names to make the search more flexible
function normalizePlaceName(placeName) {
  return placeName.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// API endpoint to find state based on latitude and longitude
app.get("/find-state", (req, res) => {
  const lat = parseFloat(req.query.lat);
  const long = parseFloat(req.query.long);

  if (isNaN(lat) || isNaN(long)) {
    return res.status(400).json({
      error: "Please provide valid numeric values for latitude and longitude.",
    });
  }

  let foundState = null;
  let foundDistrict = null;
  let foundCountry = null;
  let foundRegion = null;
  let minDistance = Infinity;
  let closestLocation = null;

  // Loop through the countries and states to find the closest match
  for (const [country, coordinates] of Object.entries(Coordinates)) {
    const distance = calculateDistance(
      lat,
      long,
      coordinates.latitude,
      coordinates.longitude
    );

    if (distance < minDistance) {
      minDistance = distance;
      foundCountry = country.replace(/_/g, " ");
      closestLocation = {
        type: "country",
        name: foundCountry,
        distance: distance,
      };
    }

    // Check for states (sub-districts)
    if (coordinates.subDistricts) {
      for (const [state, stateData] of Object.entries(
        coordinates.subDistricts
      )) {
        const stateDistance = calculateDistance(
          lat,
          long,
          stateData.latitude,
          stateData.longitude
        );

        if (stateDistance < minDistance) {
          minDistance = stateDistance;
          foundRegion = state.replace(/_/g, " ");
          foundDistrict = null;
          foundCountry = country.replace(/_/g, " ");
          closestLocation = {
            type: "state",
            name: foundRegion,
          };
        }

        // Check nested districts (cities)
        if (stateData.subDistricts) {
          for (const [district, districtCoords] of Object.entries(
            stateData.subDistricts
          )) {
            const districtDistance = calculateDistance(
              lat,
              long,
              districtCoords.latitude,
              districtCoords.longitude
            );

            if (districtDistance < minDistance) {
              minDistance = districtDistance;
              foundRegion = state.replace(/_/g, " ");
              foundDistrict = district.replace(/_/g, " ");
              foundCountry = country.replace(/_/g, " ");
              closestLocation = {
                type: "district",
                name: foundDistrict,
                distance: districtDistance,
              };
            }
          }
        }
      }
    }
  }

  // Format the output based on the closest location found
  if (closestLocation) {
    if (minDistance <= 25) {
      // Only show results within 25km
      let locationString = "";
      if (foundDistrict) {
        locationString = `${foundDistrict}, ${foundRegion}, ${foundCountry}`;
      } else if (foundRegion) {
        locationString = `${foundRegion}, ${foundCountry}`;
      } else {
        locationString = foundCountry; // Only country if no state or district found
      }
      return res.json({
        location: locationString,
        distance: minDistance.toFixed(2),
      });
    } else {
      return res.json({
        message: "No precise location found within 25km radius",
      });
    }
  } else {
    return res.json({ message: "Location not found in our database" });
  }
});

// API endpoint to find coordinates based on place name
app.get("/find-coordinates", (req, res) => {
  const placeName = normalizePlaceName(req.query.place);

  let coordinates = null;
  let originalName = null;
  let found = false;

  for (const [country, countryData] of Object.entries(Coordinates)) {
    if (normalizePlaceName(country).includes(placeName)) {
      coordinates = countryData;
      originalName = country.replace(/_/g, " ");
      found = true;
      break;
    }

    if (countryData.subDistricts) {
      for (const [state, stateData] of Object.entries(
        countryData.subDistricts
      )) {
        if (normalizePlaceName(state).includes(placeName)) {
          coordinates = stateData;
          originalName = state.replace(/_/g, " ");
          found = true;
          break;
        }

        if (stateData.subDistricts) {
          for (const [district, districtData] of Object.entries(
            stateData.subDistricts
          )) {
            if (normalizePlaceName(district).includes(placeName)) {
              coordinates = districtData;
              originalName = district.replace(/_/g, " ");
              found = true;
              break;
            }
          }
        }

        if (found) break;
      }
    }

    if (found) break;
  }

  if (!coordinates) {
    return res.status(400).json({
      error: "Place name not found.",
    });
  }

  return res.json({
    place: originalName,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
