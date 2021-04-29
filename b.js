const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
  "528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com";
const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MjA5MTA0Y2NkODkwYTVhZWRkNjczM2UwMjUyZjU0ZTg4MmYxM2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTI4OTYxMTg3OTIxLWxkMjRiMjU0NjZ1NHQybGFjbjlyMzVhc2cwMDBsZmlzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTI4OTYxMTg3OTIxLWxkMjRiMjU0NjZ1NHQybGFjbjlyMzVhc2cwMDBsZmlzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2Mzg3MTMxODY4ODExODczNDIzIiwiZW1haWwiOiJ0ZWNoMmRlYmF0ZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImNLWnpYQWYwV0NZemdrdmVONkplWlEiLCJuYW1lIjoiQXZpbmFzaCBuYW5pIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tYVlOTV9aSE9ROTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBSGsvQU1adXVja1RhNlV4SjYyTHNQWmRxVnJ6bTlKZVRQMFJUUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQXZpbmFzaCIsImZhbWlseV9uYW1lIjoibmFuaSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjE5NzEyMTEyLCJleHAiOjE2MTk3MTU3MTIsImp0aSI6IjE5NGMzOWVmZmM1YmZmOTA4MTI1MGMyNjE0YmY5YTk0MTNjYTlmOTYifQ.kICzFKtzVBzuHPY6pP1Vr9WOksQjchL3BCBbhiun9R1ynRpcqEhEUOOrL81ATNK3bdI7ng3X_5cDrd3UEdynlA9h8SLNu9l5KE7az_IixNuzHuJOBGLyxXODW_UvHwAK1Ebd-tZhO6E4eniandUePoIhTAUl9H2I-4P6ErE1A8TuZFHC9_dwN2Tl00gUAoLaYcNk3n6TY2txdcRbCan4wpme5Cu61oynRY52Zn1JPlGHTdiRn5-3-MOFm_Gsy6xcYESqW0rks9_TykshNCgP2nrOsHJaZ87GQYPWe6O2nWYtixUSd4xWpnYpW8F2ce7aMXTcbB-1_5sbdEzDdyYChQ";
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  try {
    await client
      .verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      })
      .then((d) => {
        const payload = d.getPayload();
        const userid = payload["sub"];
        console.log(payload, userid);
      });
  } catch (error) {
      console.log('qwewewq',error)
  }

  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);
