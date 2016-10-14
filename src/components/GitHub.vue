<template>
    <div class="container">
        <searchuser 
            updateUser={this.updateUser}
            updateRepos={this.updateRepos}
        />
        <userinfo 
            user={this.state.user}
            repos={this.state.repos}
        />
    </div>
</template>

<script>
// import SearchUser from './SearchUser'
// import UserInfo from './UserInfo'

    export default {
        data () {
            return {
                user: null,
                repos: [],
            }
        },

        methods: {
            updateUser: function(user) {
                this.setState({user: user});
            },
            updateRepos: function(repos) {
                this.setState({repos: repos});
            },
        }
    }
</script>