import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const GitHubUser = {
    getByUsername: function(username) {
        return Vue.http.get('https://api.github.com/users/' + username);
    },

    getReposByUsername: function(username) {
        return Vue.http.get('https://api.github.com/users/' + username + '/repos');
    }
};

export default GitHubUser;