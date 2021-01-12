<template>
  <div class="locations">
    <a-row>
      <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"
        v-for="location in locations.results" :key="location.id">
        <a-card :title="location.name"
        :bordered="false" style="margin: 5px">
          <p><b>Type:</b> {{location.type}}</p>
          <p><b>Dimension:</b> {{location.dimension}}</p>
        </a-card>
      </a-col>
    </a-row>

    <div style="padding: 10px;">
      <a-pagination v-model="current"
        :pageSize="20"
        :total="total" @change="newPage" />
    </div>
  </div>
</template>

<script>
import api from '../service/api';

export default {
  mounted() {
    this.getLocations();
  },
  data() {
    return {
      locations: [],
      current: 1,
      total: 0,
    };
  },
  methods: {
    getLocations(page = 1) {
      api.get(`/location?page=${page}`).then((response) => {
        this.locations = response.data;
        this.total = response.data.info.count;
      }).catch((error) => {
        console.log(error);
      }).then(() => {});
    },
    newPage() {
      this.getLocations(this.current);
    },
  },
};
</script>

<style>
.locations {
  min-height: calc(100vh - 192px);
}

.locations .ant-row {
  min-height: calc(100vh - 265px);
}
</style>
