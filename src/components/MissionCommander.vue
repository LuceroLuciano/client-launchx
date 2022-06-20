<template>
    <h4>Mission Commander</h4>
    <div v-if="currenMissionCommander" class="edit-form">
        <form>
            <div class="form-group">
                <label for="title">Nombre</label>
                <input type="text" disabled class="form-control" id="title"
                    v-model="currenMissionCommander.name"
                />
            </div>
            <div class="form-group">
                <label for="title">Username</label>
                <input type="text" class="form-control" id="title"
                    v-model="currenMissionCommander.username"
                />
            </div>
            <div class="form-group">
                <label for="title">MainStack</label>
                <input type="text" class="form-control" id="title"
                    v-model="currenMissionCommander.mainStack"
                />
            </div>
        </form>
        <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
            Eliminar MissionCommander
        </button><br><br>
        <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
            Actualizar
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
    </div>
</template>
<script>
import ExplorerService from "../services/ExplorerService";
export default {
  name: "missionCommander",
  data() {
    return {
      currenMissionCommander: null,
      message: ''
    };
  },
  methods: {
    getMissionCommander(id) {
      ExplorerService.getMC(id)
        .then(response => {
          this.currenMissionCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      ExplorerService.deleteMC(this.currenMissionCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "missionCommander" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() { 
      ExplorerService.updateMC(this.currenMissionCommander.id, this.currenMissionCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
