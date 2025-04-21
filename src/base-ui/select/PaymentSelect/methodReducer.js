export default function methodReducer(methods, action) {
  switch (action.type) {
    case "ADD": {
      return [...methods, action.method];
    }
    case "DELETE": {
      return methods.filter((method) => method !== action.method);
    }
  }
}
