<template>
    <div class="container">
        <SearchUser 
            @updateuser="updateUser" 
            @updaterepos="updateRepos" 
        />
        
        <transition name="slide-fade">
            <UserInfo v-if="user"
                :user="user" 
                :repos="repos" 
            />
        </transition>
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

<style scoped>
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 20px;
    opacity: 0;
    }
</style>