export function cloneObject (object: any): any {
    if (object) {
        return JSON.parse(JSON.stringify(object));
    }

    return {};
}
