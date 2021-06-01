export const addId = ({ name, author, price, category }) => {
    let id = name;
    return { name, author, price, category, id }
};

