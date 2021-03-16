export const updateObject = (oldproper, newproper) => {
    return {
        ...oldproper, 
        ...newproper
    }
}