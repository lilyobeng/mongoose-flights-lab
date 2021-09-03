const Flight = require('../models/flight');
const Ticket = require("../models/ticket");
 module.exports = {
  getAll,
  new: newFlight,
  create,
  show,
  addDestination,

}

// const newFlight = new Flight();

function getAll(req, res) {
    Flight.find(function (err, flights) {
        res.render("flights/index", { flights });
      });
}

function newFlight(req, res) {
  const newDate = new Flight();

  const dt = newDate.departs;

  const departsDate = dt.toISOString().slice(0, 16);
  console.log(departsDate);
  res.render("flights/new", { departsDate })
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.send(err);
    res.redirect("/flights");
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, ticket) {
      res.render("flights/show", { flight, ticket });
    });
  });
}

 async function addDestination(req, res) {
  let showDestination = await Flight.findById(req.params.id);
  showDestination.destinations.push({
    airport: req.body.airport,
    arrival: req.body.arrival,
  })
await showDestination.save();
res.render('flights/show', {flight: showDestination})
}


 


