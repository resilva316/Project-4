/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ho5l4fw2eljyokt")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_oBolXhV` ON `users` (`identity`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ho5l4fw2eljyokt")

  collection.indexes = []

  return dao.saveCollection(collection)
})
