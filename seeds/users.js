exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', password: "1"}),
        knex('users').insert({id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', password: "2"}),
        knex('users').insert({id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', password: "3"}),
        knex('users').insert({id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org', password: "4"}),
        knex('users').insert({id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org', password: "5"}),
        knex('users').insert({id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', password: "6"}),
        knex('users').insert({id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org', password: "7"}),
        knex('users').insert({id: 99908, name: 'Hilarious Heron', email: 'heron@example.org', password: "8"}),
        knex('users').insert({id: 99909, name: 'Intransigent Impala', email: 'impala@example.org', password: "9"}),
        knex('users').insert({id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org', password: "10"}),
        knex('users').insert({id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org', password: "11"}),
        knex('users').insert({id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org', password: "12"}),
        knex('users').insert({id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org', password: "13"}),
        knex('users').insert({id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org', password: "14"}),
        knex('users').insert({id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org', password: "15"}),
        knex('users').insert({id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org', password: "16"}),
        knex('users').insert({id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org', password: "17"}),
        knex('users').insert({id: 99918, name: 'Resolute Rail', email: 'rail@example.org', password: "18"}),
        knex('users').insert({id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org', password: "19"}),
        knex('users').insert({id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org', password: "20"}),
        knex('users').insert({id: 99921, name: 'Unassailable Urial', email: 'urial@example.org', password: "21"}),
        knex('users').insert({id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org', password: "22"}),
        knex('users').insert({id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org', password: "23"}),
        knex('users').insert({id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org', password: "24"}),
        knex('users').insert({id: 99925, name: 'Yielding Yak', email: 'yak@example.org', password: "25"}),
        knex('users').insert({id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org', password: "26"})
      ]);
    });
};
