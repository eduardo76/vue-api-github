<template>
    <div class="jumbotron">
        <h1>GitHub Info</h1>
        <div class="row">
            <form v-on:submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        ref="username"
                        class="form-control"
                        placeholder="Ex: vuejs"
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary">Buscar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import GitHubUser from '../services/GitHubUser';

    export default {
        methods: {
            handleSubmit: function() {
                GitHubUser.getByUsername(this.$refs.username.value).then(function(response) {
                    this.$emit('updateuser', response.data);
                }.bind(this));

                GitHubUser.getReposByUsername(this.$refs.username.value).then(function(response) {
                    this.$emit('updaterepos', response.data);
                }.bind(this));
            },            
        }
    }
</script>