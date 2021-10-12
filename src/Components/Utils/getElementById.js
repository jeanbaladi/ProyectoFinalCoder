import { data } from "../../data/data";

export const getElementById = (id) => data.find(item => item.id === id);