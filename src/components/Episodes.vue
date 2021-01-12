<template>
  <div class="episodes">
    <a-row>
      <a-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
        v-for="episode in episodes.results"
        :key="episode.id">
        <a-card
          :title="episode.name + ' ' + episode.episode"
          :bordered="false"
          style="margin: 5px">
          <p><b>Episode date: </b>{{ episode.air_date }}</p>

          <div style="display: flex; justify-content: center;">
            <a-button
            type="primary"
            @click="setModal1Visible(episode.characters)">
              Characters in this episode
            </a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>

    <a-modal
      v-model="modalVisible"
      title="Characters"
      width="80%"
      :footer="null"
    >
      <a-row :gutter="[24]">
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4"
          v-for="(modalCharacter, index) in modalCharacters" :key="index">
          <a-card hoverable :bordered="false" style="margin: 5px" class="characterCard">
            <img
              slot="cover"
              alt="example"
              :src="modalCharacter.data.image"
            />
            <a-card-meta :title="modalCharacter.data.name"/>
          </a-card>
        </a-col>
      </a-row>
    </a-modal>

    <div style="padding: 10px">
      <a-pagination
        v-model="current"
        :pageSize="20"
        :total="total"
        @change="newPage"
      />
    </div>
  </div>
</template>

<script>
import api from '../service/api';

export default {
  mounted() {
    this.getEpisodes();
  },
  data() {
    return {
      episodes: [],
      current: 1,
      total: 0,
      modalVisible: false,
      modalCharacters: [],
    };
  },
  methods: {
    async getEpisodes(page = 1) {
      await api
        .get(`/episode?page=${page}`)
        .then((response) => {
          this.episodes = response.data;
          this.total = response.data.info.count;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.episodes.results.map(async (episode) => {
            const i = this.episodes.results.indexOf(episode);
            const x = await this.getCharactersEpisode(episode.characters);
            this.episodes.results[i].characters = x;
          });
        });
    },
    async getCharactersEpisode(characters) {
      const personagens = [];
      characters.forEach((personagem) => {
        personagens.push(api.get(personagem));
      });
      const values = await Promise.all(personagens);
      return values;
    },
    newPage() {
      this.getEpisodes(this.current);
    },
    setModal1Visible(modalCharacters) {
      this.modalCharacters = modalCharacters;
      this.modalVisible = !this.modalVisible;
    },
  },
};
</script>

<style>
.episodes {
  min-height: calc(100vh - 192px);
}

.episodes .ant-row {
  min-height: calc(100vh - 265px);
}
</style>
