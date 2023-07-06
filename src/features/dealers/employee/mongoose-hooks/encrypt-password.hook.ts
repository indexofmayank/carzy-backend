import EncryptionHelper from 'src/common/helpers/encryption.helper';
import PreSaveHook from 'src/common/hooks/mongoose/pre-save.hook';

class EncryptPasswordHook extends PreSaveHook {

    protected async handle(schemaContext) {
        schemaContext.password = await EncryptionHelper.encryptPassword(schemaContext.password);
    }

}

export default new EncryptPasswordHook();