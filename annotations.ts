import {Component as ComponentAnnotation, Template as TemplateAnnotation} from 'angular2/angular2';

function addAnnotation(c: any, annotation: any): any {
    (c.annotations || (c.annotations = [])).push(annotation);
    return c;
}

export function Component(arg?: { selector: string, componentServices: any[] }) {
    return (c) => {
        let paramTypes = Reflect.getMetadata("design:paramtypes", c);
        if (paramTypes) {
            c.parameters = paramTypes.map(p => [p]);
        }
        else {
            c.parameters = [];
        }
        addAnnotation(c, new ComponentAnnotation(arg))
        return
    }
}

export function Template(arg: { url: string, directives: any[] }) {
    return c => addAnnotation(c, new TemplateAnnotation(arg));
}