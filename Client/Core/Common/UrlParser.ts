import { isNullOrEmpty } from "./StringUtils";

export function getParameterValueLowerCaseByKey(queryString: string, key: string): string {
    const value = getParameterValueByKey(queryString, key);
    return value ? value.toLowerCase() : "";
}

function getParameterValueByKey(queryString: string, key: string): string {//testerror
    const results: RegExpExecArray | null = searchKeyInQueryString(queryString, key);
    if (!results) {
        return "";
    }

    if (!results[1]) {
        return "";
    }

    try {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    } catch (error) {
        return "";
    }
}

function searchKeyInQueryString(queryString: string, key: string): RegExpExecArray | null {
    if (isNullOrEmpty(queryString) || isNullOrEmpty(key)) {
        return null;
    }

    if (!queryString.startsWith("?")) {
        queryString = "?" + queryString;
    }

    key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    key = key.toLowerCase();
    const regex = new RegExp("[\\?&]" + key + "=([^&#?]*)");
    return regex.exec(queryString.toLowerCase());
}