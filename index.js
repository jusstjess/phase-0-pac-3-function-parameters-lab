function introduction(name){
    return `Hi, my name is ${name}.`;
}

introduction("jess");

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("jess","JavaScript");

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


    

// 1) introductionWithLanguageOptional(name, language)
//takes in two arguments, a name and a language, and language defaults to JavaScript:
