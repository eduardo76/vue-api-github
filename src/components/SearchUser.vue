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
                        autofocus
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
                this.$emit('updateuser', null);
                this.$emit('updaterepos', []);

                GitHubUser.getByUsername(this.$refs.username.value).then(function(response) {
                    this.$emit('updateuser', response.data);
                }.bind(this));

                GitHubUser.getReposByUsername(this.$refs.username.value).then(function(response) {
                    this.$emit('updaterepos', response.data);
                }.bind(this));

                this.$refs.username.select();
            },            
        }
    }
</script>