export function findById(array, itemId) {    
    let foundItem;
    
    array.forEach(element => {
        if (element.id === itemId) {
            foundItem = element;
        } else {
            return null;
        }
    });

    return foundItem;
}