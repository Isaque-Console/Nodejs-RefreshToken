import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
    async execute(userId: string) {
        const token = sign({}, "d368662f-4d62-43d7-8908-c49509843d85", {
            subject: userId,
            expiresIn: "20s"
        });

        return token;
    }
}

export { GenerateTokenProvider };