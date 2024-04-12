const express = require("express");
const api = express();
const port = process.env.PORT || 8080;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const cors = require("cors");

api.use(express.json());
api.use(cors());

//make a joined get for launch with some ID and seats

//make a post for user accounts to create a new account

//make a joined get to display your flights

api.get("/", function (req, res) {
  res.send("DATABASE ONLINE");
});
api.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

api.get("/data/user_account", function (req, res) {
  knex("user_account")
    .select("*")
    .then((data) => res.status(200).json(data));
});

api.get("/data/launch", function (req, res) {
  knex("launch")
    .select("*")
    .then((data) => res.status(200).json(data));
});

api.get("/data/seats", function (req, res) {
  knex("seats")
    .select("*")
    .then((data) => res.status(200).json(data));
});

api.get("/data/seat_type", function (req, res) {
  knex("seat_type")
    .select("*")
    .then((data) => res.status(200).json(data));
});

api.get("/data/user_account_by_id/:id", function (req, res) {
  console.log("SEARCHING WITH ID: ", req.params.id);
  knex
    .select("*")
    .from("user_account")
    .where("id", req.params.id)
    .then((data) => res.status(200).json(data));
});

api.post("/auth/signup", (req, res) => {
  let userData = req.body;
  console.log("USING DATA FOR: ", userData.name);
  const { name, address, email, username, password } = req.body;
  //knex('user_account').insert({name: userData.name, address: userData.address, email: userData.email, username: userData.username, password: userData.password});
  knex("user_account")
    .insert({ name, address, email, username, password })
    // knex.insert([{ name: userData.name }, { address: userData.address }, { email: userData.email }, { username: userData.username }, { password: userData.password }], ['id'])
    // .into('user_account');
    .then(res.status(201).json({ status: "Authenticated" }));
});

api.post("/auth/signin", async (req, res) => {
  let userData = req.body;
  let dbData = {};
  knex("user_account")
    .select("*")
    .where({ username: userData.username })
    .then((dbResp) => {
      console.log(dbResp);
      if (dbResp[0].password === userData.password) {
        res.status(201).json({ status: "Authenticated" });
      }
    })
    .catch((err) => res.status(500).send(err));
});

api.get("/data/get_launch_price_range/:id", function (req, res) {
  console.log("SEARCHING PRICES FOR LAUNCH: ", req.params.id);
  knex
    .select("price")
    .from("seats")
    .where("launch", req.params.id)
    .then((data) => {
      //console.log("THIS: ", data);
      var lowVal = 9999999999999999;
      var highVal = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].price > highVal) {
          //console.log("NEW HIGH: ", data[i].price);
          highVal = data[i].price;
        }
        if (data[i].price < lowVal) {
          //console.log("NEW LOW: ", data[i].price);
          lowVal = data[i].price;
        }
      }
      console.log("HIGH/LOW IS: ", lowVal, " / ", highVal);
      var highLow = [lowVal, highVal];
      data = highLow;
      res.status(200).json(data);
    });
});

api.get("/data/get_user_id", function (req, res) {
  console.log("SEARCHING WITH USERNAME: ", req.params.id);
  knex
    .select("*")
    .from("user_account")
    .where("id", req.params.id)
    .then((data) => res.status(200).json(data));
});

// api.get("/data/launches_by_user_id", function (req, res) {
//   var launchDetails = []; //HOLDS OBJECTS TO SEND BACK AS RESPONSE
//   var launchObject = {}; //DETAILS FOR EACH INDIVIDUAL LAUNCH
//   knex.select("seat_type_int", "launch", "price")
//     .from("seats")
//     .where("passenger", req.body.id)
//     .then((data) => {
//       //INDICIES IS USED AS A FOREIGN KEY TO THE LAUNCH TABLE
//       var indicies = data;
//       //console.log(indicies);
//       //LOOP THROUGH AND GET ALL DETAILS FOR ALL FLIGHTS ASSOSIATED WITH A USER
//       for (var i = 0; i < indicies.length; i++) {
//         knex.select("id", "destination", "distance_from_earth", "is_available", "seller", "date_time")
//           .from("launch")
//           .where("id", indicies[i].launch)
//           .then((launchData) => {
//             launchObject = {
//               launch_id:  launchData[0].id,
//               launch_destination:  launchData[0].destination,
//               launch_distance_from_earth:  launchData[0].distance_from_earth,
//               launch_is_available:  launchData[0].is_available,
//               launch_seller:  launchData[0].seller,
//               launch_date_time:  launchData[0].date_time, //CONSOLE LOGGING THE OBJ HERE WILL RECURSIVLEY LOG GOOD DATA
//             };
//             //console.log(launchObject)
//             return launchObject;
//             //LAUNCHOBJECT FALLS INTO THE VOID AFTER THIS LINE
//           }).then((launchObject) => {
//             launchDetails.push(launchObject)
//           })
//       }
//     }).then(res.status(200).json(launchDetails));
// });

api.get("/data/launches_by_user_id", function (req, res) {
  var userId = req.body.id;
  console.log("WORKING WITH ID: ", userId);
  knex.raw(`select launch.*, seats.price from user_account, seats, launch where user_account.id = ${userId} and seats.passenger = ${userId} and seats.launch = launch.id;`)
  .then((data) => {
    //console.log(data);
    return data;
  })
  .then((data) => {
    var theDetails = data.rows;

    res.status(200).json(theDetails)
  });
})