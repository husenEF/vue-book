<template>
  <div class="card rounded shadow">
    <div class="card-header">
      Book List

      <router-link
        :to="{ name: 'book.create' }"
        class="btn btn-primary float-right"
        >Add
      </router-link>
    </div>
    <div class="card-body">
      <!--
       {
        "createdAt": 1580812938,
        "createdBy": {
          "fullname": "Incenplus",
          "id": "5e394a2ce43ddee40b30a41e",
          "username": "icp"
        },
        "deletedAt": null,
        "description": "Mantpa",
        "id": "5e394a8a91476838631e48a1",
        "modifiedAt": 1625208976,
        "modifiedBy": {
          "fullname": "Incenplus",
          "id": "5e394a2ce43ddee40b30a41e",
          "username": "icp"
        },
        "name": "Gul Gul"
      },
       -->
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ok</td>
            <td>des</td>
            <td>husen</td>
            <td>
              <div class="btn-group">
                <router-link
                  :to="{ name: 'book.edit', params: { id: 1 } }"
                  class="btn btn-sm btn-info"
                >
                  edit
                </router-link>
                <button class="btn btn-danger btn-sm">delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>