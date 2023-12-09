/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ho5l4fw2eljyokt")

  collection.name = "users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ho5l4fw2eljyokt")

  collection.name = "users_duplicate"

  return dao.saveCollection(collection)
})
