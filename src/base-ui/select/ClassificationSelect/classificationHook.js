import { useState, useEffect } from "react";
import getInitCategories from "./getInitCategories";

export default function classificationHook(transactionType) {
  const [categoryActivate, setCategoryActivate] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(() => getInitCategories(transactionType));
  }, [transactionType]);
  return { categoryActivate, setCategoryActivate, categories };
}
