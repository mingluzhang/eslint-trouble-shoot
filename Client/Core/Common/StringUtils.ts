export const emptyGuid = "00000000-0000-0000-0000-000000000000";
export const NEW_LINE = "\n";

export function isNullOrEmpty(s?: string): boolean {//testerror
    return s === undefined || s === null || s.length === 0;
}

export function isNullOrWhiteSpace(s: string): boolean {
    return isNullOrEmpty(s) || s.trim().length === 0;
}

export function endsWith(testString: string, suffix: string): boolean {
    if (testString === null || testString === undefined || suffix === null || suffix === undefined) {
        return false;
    }
    return testString.indexOf(suffix, testString.length - suffix.length) !== -1;
}

export function startsWith(testString: string, prefix: string): boolean {
    if (testString === null || testString === undefined || prefix === null || prefix === undefined) {
        return false;
    }
    return testString.indexOf(prefix) === 0;
}

export function capitalizeFirstLetter(s: string): string {
    return s.charAt(0).toUpperCase() + s.substring(1);
}

export function isUriEncoded(s: string): boolean {
    try {
        return typeof s === "string" && decodeURIComponent(s) !== s;
    } catch (error) {
        return false;
    }
}

export function safeToLowerCase(userName: string): string {
    if (!isNullOrEmpty(userName)) {
        return userName.toLowerCase();
    }

    return userName;
}

export function caseInsensitiveCompare(a: string, b: string): boolean {
    return safeToLowerCase(a) === safeToLowerCase(b);
}

export function format(_compositeString: string, ..._args: any[]): string {
    return toFormattedString(false, arguments);
}

export function localeFormat(_compositeString: string, ..._args: any[]): string {
    return toFormattedString(true, arguments);
}

function toFormattedString(localeFormat: boolean, args: IArguments): string {
    let result = "";
    const compositeString: string = args[0];

    if (!compositeString) {
        return "";
    }

    for (let index = 0; true;) {
        const formatItemStartIndex: number = compositeString.indexOf("{", index);
        const formatItemEndIndex: number = compositeString.indexOf("}", index);

        if (formatItemStartIndex < 0 && formatItemEndIndex < 0) {
            result += compositeString.slice(index);
            break;
        }

        if (formatItemEndIndex > 0 && (formatItemEndIndex < formatItemStartIndex || formatItemStartIndex < 0)) {
            result += compositeString.slice(index, formatItemEndIndex + 1);
            index = formatItemEndIndex + 2;
            continue;
        }

        result += compositeString.slice(index, formatItemStartIndex);
        index = formatItemStartIndex + 1;
        if (compositeString.charAt(index) === "{") {
            result += "{";
            index++;
            continue;
        }

        if (formatItemEndIndex < 0) {
            break;
        }

        const formatItem: string = compositeString.substring(index, formatItemEndIndex);
        const formatItemSplitIndex: number = formatItem.indexOf(":");
        const argumentIndex: number =
            parseInt(formatItemSplitIndex < 0 ? formatItem : formatItem.substring(0, formatItemSplitIndex), 10) + 1;
        const formatString: string = formatItemSplitIndex < 0 ? "" : formatItem.substring(formatItemSplitIndex + 1);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let argument: any = args[argumentIndex];

        if (typeof argument === "undefined" || argument === null) {
            argument = "";
        }

        // TODO: revisit
        /* cspell:disable-next-line */
        if (argument.toFormattedString) {
            result += argument.toFormattedString(formatString);
        } else if (localeFormat && argument.localeFormat) {
            result += argument.localeFormat(formatString);
        } else if (argument.format) {
            result += argument.format(formatString);
        } else {
            result += argument.toString();
        }

        index = formatItemEndIndex + 1;
    }

    return result;
}

export function removeLeadingHashes(input: string): string {
    if (input == null) {
        return "";
    }

    let i = 0;

    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) !== "#") {
            break;
        }
    }

    return input.substring(i, input.length);
}

export function isHighlightedText(text: string): boolean {
    return !isNullOrEmpty(text) && text.indexOf("<mark>") !== -1;
}

export function trim(str: string): string {
    if (typeof str !== "string") {
        return str;
    }
    return str.trim();
}

export function charCodesToString(cca: number[]): string {
    if (!cca || cca.length === 0) {
        return "";
    }

    const out = new Array(cca.length);
    for (let i = 0; i < cca.length; i++) {
        out[i] = String.fromCharCode(cca[i]);
    }
    return out.join("");
}

export function str2ArrayBuffer(str: string): ArrayBuffer {
    const buf = new ArrayBuffer(str.length * 2);
    const bufView = new Uint16Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

export function arrayBuffer2Str(buffer: ArrayBuffer): string {
    let buffString = "";
    (new Uint16Array(buffer)).forEach((byte: number): void => {
        buffString += String.fromCharCode(byte);
    });

    return buffString;
}

export function getLanguageFromLocale(locale: string): string {
    if (locale) {
        return locale.split("-")[0];
    }

    return "";
}

export function cleanLocalizedString(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, "");
}