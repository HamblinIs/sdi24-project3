/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    {
      "id": 1,
      "name": "John Doe",
      "address": "1234 Elm St, Springfield, IL",
      "email": "johndoe@example.com",
      "username": "johndoe123",
      "password": "Password123"
  },
  {
      "id": 2,
      "name": "Alice Smith",
      "address": "5678 Maple St, Anytown, CA",
      "email": "alice.smith@example.com",
      "username": "asmith",
      "password": "SecurePwd456"
  },
  {
      "id": 3,
      "name": "Bob Johnson",
      "address": "91011 Oak St, Metropolis, NY",
      "email": "bobjohnson@example.com",
      "username": "bobj",
      "password": "MyPwd789"
  },
  {
      "id": 4,
      "name": "Emily Brown",
      "address": "121314 Pine St, Smallville, TX",
      "email": "emily.brown@example.com",
      "username": "ebrown",
      "password": "Brownie456"
  },
  {
      "id": 5,
      "name": "Michael Wilson",
      "address": "151617 Cedar St, Rivertown, FL",
      "email": "michael.wilson@example.com",
      "username": "mwilson",
      "password": "Wilson123!"
  },
  {
      "id": 6,
      "name": "Sarah Taylor",
      "address": "181920 Walnut St, Lakeside, WA",
      "email": "sarah.taylor@example.com",
      "username": "stayl",
      "password": "TaylorPwd789"
  },
  {
      "id": 7,
      "name": "Chris Martinez",
      "address": "212223 Birch St, Hill Valley, CA",
      "email": "chris.martinez@example.com",
      "username": "cmartinez",
      "password": "WelcomeCM456"
  },
  {
      "id": 8,
      "name": "Linda Clark",
      "address": "242526 Maple St, Greenvale, NC",
      "email": "linda.clark@example.com",
      "username": "lclark",
      "password": "ClarkPwd2023"
  },
  {
      "id": 9,
      "name": "David Baker",
      "address": "272829 Oak St, Sunnydale, AZ",
      "email": "david.baker@example.com",
      "username": "dbaker",
      "password": "Baker@2024"
  },
  {
      "id": 10,
      "name": "Emma Thompson",
      "address": "303132 Pine St, Lakeside, NV",
      "email": "emma.thompson@example.com",
      "username": "ethompson",
      "password": "ThompsonPwd567"
  }
  ]);
};
