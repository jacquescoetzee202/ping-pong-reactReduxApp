import esperanto from "./esperanto.json";
import english from "./english.json";

const translate = ( langRef, string ) => {
    // setting the language translation dict based on langRef
    let langDict = langRef === 1 ? english : esperanto;

    let words = string.split(/\s*\s\s*/);

    let result = words.reduce( (translated, word) => {
        return translated + langDict[word] + " ";
    },"");

    return result;
}

export default translate;