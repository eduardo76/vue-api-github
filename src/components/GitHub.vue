<template>
    <div class="container">
        <SearchUser 
            @updateuser="updateUser" 
            @updaterepos="updateRepos" 
        />
        
        <UserInfo 
            :user="user" 
            :repos="repos" 
        />
    </div>
</template>

<script>
import SearchUser from './SearchUser.vue'
import UserInfo from './UserInfo.vue'

    export default {
        name: 'GitHub',
        components: {
            'SearchUser': SearchUser,
            'UserInfo': UserInfo
        },

        data () {
            return {
                user: null,
                repos: [],
            }
        },

        methods: {
            updateUser: function(user) {
                this.user = user;
            },
            updateRepos: function(repos) {
                this.repos = repos;
            },
        }
    }
</script>