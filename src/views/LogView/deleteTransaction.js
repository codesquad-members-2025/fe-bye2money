import Domain from "../../utils/serverDomain";

export async function deleteTransaction(item, mainPageDispatch) {
  const res = await fetch(`${Domain.main}/${item.id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    mainPageDispatch({ type: "DELETE_TRANSACTION", payload: item });
  }
}
