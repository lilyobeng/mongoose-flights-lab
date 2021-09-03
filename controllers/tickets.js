const Flight = require("../models/flight");

const Ticket = require("../models/ticket");

module.exports = {
  showTicket,
  createTicket,
};

function showTicket(req, res) {
  console.log('somehtung')
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({}, function (err, tickets) {
      res.render("tickets/new", { flight, tickets });
    });
  });
}

function createTicket(req, res) {
  let flightID = req.params.id;
  console.log(flightID)

  let newTicket = new Ticket(req.body);
  console.log(newTicket)

   newTicket.flight.push(flightID);
  newTicket.save(function (err) {
    if (err) return console.log(err);
    res.redirect(`/flights/${flightID}`);
  });
}