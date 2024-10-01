export function renderJson(parent: HTMLDivElement, value: any, appendComma = false) {
    if (Array.isArray(value)) {
        parent.appendChild(renderSymbol('['));
        if (value.length > 0) {
            parent.appendChild(renderArrayContent(value));
        }
        parent.appendChild(renderSymbol(']'));
    } else if (typeof value === 'object' && value !== null) {
        parent.appendChild(renderSymbol('{'));
        if (Object.keys(value).length > 0) {
            parent.appendChild(renderObjectContent(value));
        }
        parent.appendChild(renderSymbol('}'));
    } else {
        parent.appendChild(renderSimpleType(value, 'json-object-value'));
    }
    if (appendComma) {
        parent.appendChild(renderSymbol(','));
    }
}



function renderSimpleType(value, className = '') {
    const element = document.createElement('span');
    element.className = className;
    switch (typeof value) {
        case 'string':
            element.innerText = `"${value}"`;
            break;
        case 'number':
        case 'boolean':
            element.innerText = value.toString();
            break;
        case 'undefined':
            element.innerText = 'undefined';
        case 'object':
            if (value === null) {
                element.innerText = 'null';
            }
        default:
            element.innerText = value.toString();
    }
    return element;
}

function renderSymbol(symbol: string, className = '') {
    const element = document.createElement('span');
    element.className = className;
    element.innerText = symbol
    return element;
}

function renderObjectContent(object: any) {
    const element = document.createElement('div');
    element.className = 'json-object-content';
    Object.keys(object).forEach((key, index) => {
        const value = object[key];
        const appendComma = index < Object.keys(object).length - 1;
        element.appendChild(renderKeyValuePair(key, value, appendComma));
    });
    return element;
}

function renderKeyValuePair(key: string, value: any, appendComma: boolean) {
    const element = document.createElement('div');
    element.className = 'json-object-key-value';
    element.appendChild(renderObjectKey(key));

    renderJson(element, value, appendComma);
    return element;
}

function renderObjectKey(name: string) {
    const element = document.createElement('span');
    element.className = 'json-object-key-wrapper';
    const elementInner = document.createElement('span');
    elementInner.className = 'json-object-key';
    elementInner.innerText = name;
    element.appendChild(elementInner);
    element.appendChild(renderSymbol(':'));
    return element;
}

function renderArrayContent(array: any[]) {
    const element = document.createElement('div');
    element.className = 'json-array-content';
    array.forEach((item, index) => {
        const appendComma = index < array.length - 1;
        element.appendChild(renderArrayItem(item, appendComma));
    });
    return element;
}

function renderArrayItem(value: any, appendComma: boolean) {
    const element = document.createElement('div');
    element.className = 'json-array-item';
    renderJson(element, value, appendComma);
    return element;
}

