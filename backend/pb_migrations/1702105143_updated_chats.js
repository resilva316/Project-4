/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0dxc182tfrkkm36")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l1cvoxhq",
    "name": "user1",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d8y8sk5m",
    "name": "user2",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0dxc182tfrkkm36")

  // remove
  collection.schema.removeField("l1cvoxhq")

  // remove
  collection.schema.removeField("d8y8sk5m")

  return dao.saveCollection(collection)
})
