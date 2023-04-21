import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

// initialize firebase server
const admin = require('firebase-admin')
var serviceAccount = require("../../config/ServiceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// FIREBASE AUTHENTICATION METHOD
export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("req header", req.headers)
  const userToken = req.headers.authorization.split('Bearer ')[1]; //get user token from request headers
  // console.log("auth user token", userToken)
  //verify token
  try {
    const decodedToken = await admin.auth().verifyIdToken(userToken);
    // req['currentUser'] = decodedToken;
    req.user = decodedToken;
    return next();

  } catch (err) {
    console.log("error in middleware auth.ts", err)
    return res.sendStatus(StatusCodes.UNAUTHORIZED)
  }
}



// PASSPORT METHOD
// export const isAuthenticated = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log("isAuthenticated", req.headers)
//   if (req.isAuthenticated()) {
//     return next()
//   }
//   return res.sendStatus(StatusCodes.UNAUTHORIZED)
// }
