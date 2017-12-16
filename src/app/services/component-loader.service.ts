import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Inject, Type, ViewContainerRef} from '@angular/core';

export class ComponentLoaderService {
    private componentFactoryResolver: ComponentFactoryResolver

    constructor(@Inject(ComponentFactoryResolver) resolver: ComponentFactoryResolver) {
        this.componentFactoryResolver = resolver
    }

    loadComponent<T>(container: ViewContainerRef, component: Type<T>, data: Object): ComponentRef<T> {
        container.clear();
        const componentRef: ComponentRef<T> = container.createComponent(this.createComponentFactory(component));
        Object.assign(componentRef.instance, data);
        container.insert(componentRef.hostView);
        return componentRef;
    }

    private createComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
        return this.componentFactoryResolver.resolveComponentFactory(component);
    }
}
