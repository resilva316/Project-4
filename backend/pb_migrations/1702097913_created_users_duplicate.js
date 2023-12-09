/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ho5l4fw2eljyokt",
    "created": "2023-12-09 04:58:33.270Z",
    "updated": "2023-12-09 04:58:33.270Z",
    "name": "users_duplicate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wsq9uxh5",
        "name": "identity",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "38s6otae",
        "name": "password",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ho5l4fw2eljyokt");

  return dao.deleteCollection(collection);
})
