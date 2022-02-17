import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;


    if(!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }

    // Baerer asdasdfg6fd54hg6sd4fh654hj546sa54df
    const [, token] = authToken.split(" ");

    try {
        verify( token, "d368662f-4d62-43d7-8908-c49509843d85");

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}