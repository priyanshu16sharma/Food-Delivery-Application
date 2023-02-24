import passport from 'passport';
import JwtPassport from 'passport-jwt';
//import { users } from '../database/allModels';
import users from '../database/user';
import mongoose from 'mongoose';

const JwtStrategy = JwtPassport.Strategy;

const extractJwt = JwtPassport.ExtractJwt;
const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
}

export default (passport) => {
    passport.use(
        new JwtStrategy(options, async (jwt_payLoad, done) => {
            try {
                const _id = jwt_payLoad.user;
                const user = await users.findById(_id);
                if (!user) return done(null, false);
                return done(null, user);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
}