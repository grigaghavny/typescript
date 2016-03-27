///**
// * Created by Lera on 27-Mar-16.
// */

//export {PageGenerator} from '../GeneratorApi/Pagegenerator';
//import lib = require('myLib');

import { PageGenerator } from "../GeneratorApi/PageGenerator";

export class MyOwnPage implements PageGenerator{
    getGenerator (): String {
        return " My name is Aghavni";
    }
     getUrl(): String {
         return "http://animespirit.ru";
     }
}
