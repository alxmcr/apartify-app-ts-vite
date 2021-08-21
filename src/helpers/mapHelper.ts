export const createCustomMarker = (): HTMLElement => {
    const element = document.createElement("div");
    element.classList.add("marker--apartment")
    return element;
}