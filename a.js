var jwt = require("jsonwebtoken");

// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// Synchronous Sign with RSA SHA256

// sign with RSA SHA256
// var privateKey = fs.readFileSync('private.key');
// var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
// Sign asynchronously
let token_gen = "";
token_gen = jwt.sign(
  {
    iss: "accounts.google.com",
    azp:
      "528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com",
    aud:
      "528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com",
    sub: "116387131868811873423",
    email_verified: true,
    // at_hash: "uNN76GfHUKzTINLVghe-Dg",
    name: "Avinash nani",
    picture:
      "https://lh3.googleusercontent.com/-aYNM_ZHOQ90/AAAAAAAAAAI/AAAAAAAAAHk/AMZuuckTa6UxJ62LsPZdqVrzm9JeTP0RTQ/s96-c/photo.jpg",
    given_name: "Avinash",
    family_name: "nani",
    locale: "en",
    // iat: 1619707037,
    // exp: 1619710637,
    jti: "0eec4e5b6742ee234500d6b6ec7abc97140cb69e",
  },
  "EDJb34y267rv3Cu6ibupaWQBjOFM6escz8ht5gTVqly4OUd7nywdRXKNwwixeJ6toUpHCPmnSpIqFEB6hZvJGGGG",
  // {
  //   algorithm: "RS256",
  //   expiresIn: "24h",
  // }
  {
    algorithm: "RS256",
    expiresIn: 86400, // expires in 24 hours
  }
);
console.log(token_gen);
// var token = jwt.sign({ id: user._id }, config.secret, {
//   expiresIn: 86400 // expires in 24 hours
// });

// const token_gen =
//   "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MjA5MTA0Y2NkODkwYTVhZWRkNjczM2UwMjUyZjU0ZTg4MmYxM2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTI4OTYxMTg3OTIxLWxkMjRiMjU0NjZ1NHQybGFjbjlyMzVhc2cwMDBsZmlzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTI4OTYxMTg3OTIxLWxkMjRiMjU0NjZ1NHQybGFjbjlyMzVhc2cwMDBsZmlzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2Mzg3MTMxODY4ODExODczNDIzIiwiZW1haWwiOiJ0ZWNoMmRlYmF0ZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InVOTjc2R2ZIVUt6VElOTFZnaGUtRGciLCJuYW1lIjoiQXZpbmFzaCBuYW5pIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tYVlOTV9aSE9ROTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBSGsvQU1adXVja1RhNlV4SjYyTHNQWmRxVnJ6bTlKZVRQMFJUUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQXZpbmFzaCIsImZhbWlseV9uYW1lIjoibmFuaSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjE5NzA3MDM3LCJleHAiOjE2MTk3MTA2MzcsImp0aSI6IjBlZWM0ZTViNjc0MmVlMjM0NTAwZDZiNmVjN2FiYzk3MTQwY2I2OWUifQ.Kkec95Kb-2tBS0eKfSVvnXSB-p_EaabGwdzqNxAt5OB4hcierWFmFS562QXqQzIUFqZmPJGyB63gDv4Wz_3p9ZJ5mA4GyADwyV3OUj7JKi09q7y2xV0VRc4VdnoTauWAfyUsvWJaUWy-OPc8n103JU1EMOG1B_RDmyVZxJ5QHe-oMdQKd0BvrT06BzpUh9p78N2-iA4Kht2s5lgzGkvZXQJBTgq185IdNArUzxrpAjF7Km3DWup_4ksHXpJBobEqyGg9nuonFJpN6CZreUV9dpLr5OZSPUzDcRRNrXd3Q0CIurcBISuXWPkDIUDc-HKJHc7uTiU_-s4WJ-2SUiwgLA";
// console.log(token_gen, jwt.decode(token_gen));
