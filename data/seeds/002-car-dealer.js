exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("car-dealer")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("car-dealer").insert([
        { vin: "8xe45890", make: "chevy", model: "malibu", mileage: "150000" },
        { vin: "9bc43891", make: "dodge", model: "charger", mileage: "100000" },
        { vin: "6aa67851", make: "honda", model: "odyssey", mileage: "110000" }
      ]);
    });
};
