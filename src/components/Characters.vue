<template>
  <div class="characters">
    <a-row :gutter="[24]">
      <a-col :xs="24" :sm="12" :md="24" :lg="12" :xl="8"
      v-for="character in characters.results" :key="character.id">
        <a-card hoverable :bordered="false" style="margin: 5px" class="characterCard">
          <img
            slot="cover"
            alt="example"
            :src="character.image"
          />
          <a-card-meta :title="character.name">
            <div slot="description">
              <div><span>Status:</span> {{character.status}}</div>
              <div><span>Species:</span> {{character.species}}</div>
              <div><span>Gender:</span> {{character.gender}}</div>
              <div><span>Origin:</span> {{character.origin.name}}</div>
              <div><span>Location:</span> {{character.location.name}}</div>
            </div>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>

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
    this.getCharacters();
  },
  data() {
    return {
      characters: [],
      current: 1,
      total: 0,
    };
  },
  methods: {
    getCharacters(page = 1) {
      api.get(`/character?page=${page}`)
        .then((response) => {
          this.characters = response.data;
          this.total = response.data.info.count;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    newPage() {
      this.getCharacters(this.current);
    },
  },
};
</script>
