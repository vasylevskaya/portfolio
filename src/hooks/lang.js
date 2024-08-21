import local from "../data/local.json";

export const t = (key) => {
  const foundContent = local.find((contentItem) => contentItem.key === key)
  return foundContent ? foundContent.en : key
}