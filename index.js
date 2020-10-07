// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

//data handlers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
const tables = [
    {
        Name: 'john',
        party: '4',
        Seating: 'indoor'
    },
    {
        Name: 'jim',
        party: '4',
        Seating: 'indoor'
    },
    {
        Name: 'sally',
        party: '4',
        Seating: 'indoor'
    },
    {
        Name: 'evan',
        party: '4',
        Seating: 'indoor'
    },
    {
        Name: 'denis',
        party: '4',
        Seating: 'indoor'
    }
];
const reservations = [
    {
        Name: 'billy',
        party: '2',
        Seating: 'outdoor'
    }
];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.send("Welcome to the Taco Restaurant");
});

app.get('/api/tables', function (req, res) {
    return res.json(tables);
})

app.get('/api/reservations', function (req, res) {
    return res.json(reservations);
})

if (tables.length <= 5) {
    app.post('/api/tables', function (req, res) {
        tables.push(req.body);
        res.json(tables);
        return res.json(false);
    })
} else {
    app.post('/api/reservations', function (req, res) {
        reservations.push(req.body);
        res.json(reservations);
    })
}






// Listener
// ===========================================================
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    console.log(newTable);

    // We then add the json the user sent to the character array
    tables.push(newTable);

    // We then display the JSON to the users
    res.json(newTable);
});

app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(newReservation);

    // We then add the json the user sent to the character array
    reservations.push(newReservation);

    // We then display the JSON to the users
    res.json(newReservation);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
