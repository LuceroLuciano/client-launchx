<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Mission Commanders Inscritos</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(newMissionCommander, index) in newMissionCommander"
                    :key="index"
                    @click="setActiveNewMissionCommander(newMissionCommander, index)"
                >
                {{ newMissionCommander.username }}
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <div v-if="currenNewMissionCommander">
                <h4>Mission Commander</h4>
                <div>
                    <br><label><strong>Nombre:</strong></label>{{ currenNewMissionCommander.name }}
                    <br><label><strong>Username:</strong></label>{{ currenNewMissionCommander.username }}
                    <br><label><strong>MainStack:</strong></label>{{ currenNewMissionCommander.mainStack }}
                </div>
                <router-link :to="'/newMissionCommander/' + currenNewMissionCommander.id" class="btn btn-info">Editar</router-link>
            </div>
            <div v-else>
                <br />
                <p>Selecciona un Mission Commander</p>
            </div>
        </div>
    </div>
</template>
<script>
import ExplorerService from "../services/ExplorerService";

export default {
  name: "missionCommander",
  data() {
    return {
      tutorials: [],
      newMissionCommander: [],
      currentTutorial: null,
      currenNewMissionCommander: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllMC(){
      ExplorerService.getAllMC()
        .then(response => {
          this.newMissionCommander = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveNewMissionCommander(newMissionCommander, index) {
      this.currentNewMissionCommander= newMissionCommander;
      this.currentIndex = newMissionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMC();
  }
};
</script>
