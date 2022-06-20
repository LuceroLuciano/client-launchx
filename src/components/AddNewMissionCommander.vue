<template>
    <div class="submit-form">
        <div v-if="!submitted">
          <h3>Agregar Nuevo Mission Commander</h3>
          <div class="form-group">
              <label for="title">Nombre</label>
              <input 
                  type="text"
                  class="form-control"
                  id="title"
                  required
                  v-model="newMissionCommander.name"
                  name="title"
              />
          </div>
          <div class="form-group">
              <label for="title">Username</label>
              <input 
                  type="text"
                  class="form-control"
                  id="username"
                  required
                  v-model="newMissionCommander.username"
                  name="username"
              />
          </div>
          <div class="form-group">
            <label for="title">MainStack</label>
            <input 
                type="text"
                class="form-control"
                id="mainStack"
                required  
                v-model="newMissionCommander.mainStack"
                name="mainStack"  
            />
        </div>
        <button @click="saveNewMissionCommander" class="btn btn-success">Agregar</button>
      </div>
      <div v-else>
        <h4>Mission Commander Creado exitosamente!</h4>
        <button class="btn btn-success" @click="newNewMissionCommander">Add</button>
      </div>
    </div>
</template>
<script>
import ExplorerService from "../services/ExplorerService";
export default {
  name: "add-newMissionCommander",
  data() {
    return {
      newMissionCommander: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveNewMissionCommander() {
      var data = {
        name: this.newMissionCommander.name,
        username: this.newMissionCommander.username,
        mainStack: this.newMissionCommander.mainStack
      };
      ExplorerService.createMC(data)
        .then(response => {
          this.newMissionCommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newNewMissionCommander() {
      this.submitted = false;
      this.explorer = {};
    }
  }
};
</script>