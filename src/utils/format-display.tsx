export const formatPasswordDisplay = (password?: string) => {
    let firstFiveCharacters = password?.substring(0, 5);
    const otherEndCharacters = password?.substring(5, password?.length-40);
    let characterLength = otherEndCharacters?.length ?? 0;

    while (characterLength > 0) {
        firstFiveCharacters+="*";
        characterLength --;
    }

    return firstFiveCharacters;
}