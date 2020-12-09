import esperanto from "./esperanto.json";
import english from "./english.json";

const translate = ( langRef, string ) => {
    // setting the language translation dict based on langRef
    let langDict = langRef === 1 ? english : esperanto;

    let words = string.split(/\s+/);

    let translatedWords = words.map( word => {
        return langDict[word] || word;
    });

    let result = translatedWords.join(" ");

    return result;
}

export default translate;