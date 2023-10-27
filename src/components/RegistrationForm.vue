<template>
    <v-container class="fill-height">
      <v-row justify="center" style="height: 70%;">
        <v-col cols="4">
          info
        </v-col>
        <v-col cols="4">

        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'RegistrationForm',

  data: () => ({
    user: {
      username: '',
      email: '',
      password: '',
    },
    methods: {
      registerUser() {
        console.log(this.user)
      },
    },
  }),
}
</script>
