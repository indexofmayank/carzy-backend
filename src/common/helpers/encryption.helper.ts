
import * as bcrypt from "bcrypt";

export default class EncryptionHelper {

    static async encryptPassword(password: string): Promise<string> {
        const encryptedPassword = await bcrypt.hash(password, 10);
        return encryptedPassword;
    }

    static async compareEncryptedPassword(password, encryptedPassword): Promise<boolean> {
        const isPasswordValid = await bcrypt.compare(password, encryptedPassword);
        return isPasswordValid;
    }

}