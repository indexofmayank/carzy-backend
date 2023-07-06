abstract class PreSaveHook {
    protected abstract handle(schemaContext);

    public call() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const preSaveHookContext = this;
        return async function (next) {
            await preSaveHookContext.handle(this);
            next();
        }
    }
}

export default PreSaveHook;