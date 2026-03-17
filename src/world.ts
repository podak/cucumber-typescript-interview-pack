import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber'

export class GenericWorld extends World {

    constructor(options: IWorldOptions) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options)
    }
}

setWorldConstructor(GenericWorld)