import { useState, useReducer } from "react";

export default function classificationHook() {
  const [categoryActivate, setCategoryActivate] = useState(false);
  const [methods, dispatch] = useReducer(classReducer, getInit());
}
