//modules are exectuted within their own scope not global
// variables,functions,classes are not visible outside 
// the module, module loader: CommonJS/require/amd

export interface StringValidator{
    isAccetable(s:string): boolean;
}