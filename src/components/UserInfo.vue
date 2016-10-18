<template>
    <div class="row">
        <div class="col-lg-4">
            <img class="img-circle" :src="user.avatar_url" alt="avatar" width="140" height="140" />
            <h2>{{user.login}}</h2>
            <p>{{user.name}}</p>
            <p>Followers: {{user.followers}} / Following: {{user.following}}</p>
            <p><a class="btn btn-default" :href="user.html_url" role="button">View details</a></p>
        </div>
        <div class="col-lg-8">
            <UserRepos :repos="repos"/>
        </div>
    </div>
</template>

<script>
import UserRepos from './UserRepos.vue'    

    export default {
        components: {
            'UserRepos': UserRepos,
        },

        props: {
            user: {
                type: Object, 
            },
            repos: {
                type: Array, 
            }
        }
    }

</script>
